const data = []
const gridConfig = {
    features: {
        filter : true,
        
      },
    columns : [
        {type : 'rownumber'},
        { text : 'Name', field : 'name', flex : 2 },
        { text : 'City', field : 'city', flex: 1 },
        { text : 'Class', field : 'class', flex : 1 },
        { text : 'Email', field : 'email', flex : 1 },
    ],
    data : data, 
};

export { gridConfig };
