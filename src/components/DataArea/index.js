import React, {useState, useEffect} from "react";
import "./DataArea.css";
import DataAreaContext from "../../utils/DataAreaContext"
import DataTable from "../DataTable";
import Nav from "../Nav";
import API from "../../utils/API";


const DataArea = () => {
      const [developerState, setDeveloperState] = useState({
        users: [],
        order: "ascend",
        filteredUsers: [],
        headings: [
          { name: "Photo", width: "10%", },
          { name: "Name", width: "10%", },
          { name: "Phone Number", width: "20%", },
          { name: "Email Address", width: "20%", },
          { name: "Date of Birth", width: "10%", }
        ]
      });
    
      const handleSort = heading => {
        if (developerState.order === "descend") {
            setDeveloperState({
                order:"ascend"
            })
        } else{
            setDeveloperState({
                order:"descend"
            })
        }
    
        const compareFnc = (a, b) => {
          if (developerState.order === "ascend") {
            if (a[heading] === undefined) {
              return 1;
            } else if (b[heading] === undefined) {
              return -1;
            } else if (heading === "name") {
              return a[heading].first.localeCompare(b[heading].first);
            } else {
              return b[heading] - a[heading];
            } 
          } else {
        if (a[heading] === undefined){
            return 1;
        } else if (b[heading] === undefined){
            return -1;
        } else if (heading ==="name"){
            return b[heading].first.localeCompare(a[heading].first);
        } else {
return b[heading]-  a[heading];
        }
    }
    }
        const sortedUsers = developerState.filteredUsers.sort(compareFnc);

        setDeveloperState({
          ...developerState,
          filteredUsers: sortedUsers
});

 };
   
      const handleSearchChange = event => {
        const filter = event.target.value;
        const filteredList = developerState.users.filter(item => {
          let values = item.name.first.toLowerCase();
          return values.indexOf(filter.toLowerCase()) !== -1;
        });
    
        setDeveloperState({ 
        ...developerState, 
        filteredUsers: filteredList });
      };

      useEffect(() => {
        API.getRandomPeople().then(results => {
          setDeveloperState({
            ...developerState,
            users: results.data.results,
            filteredUsers: results.data.results
          });
        });
      }, []);
    
      return (
        <DataAreaContext.Provider
          value={{ developerState, handleSearchChange, handleSort }}
        >
          <Nav />
          <div className="data-area">
            {developerState.filteredUsers.length > 0 
    ? <DataTable />
     : <div></div>
     }
          </div>
        </DataAreaContext.Provider>
      );
    }
    
    export default DataArea;