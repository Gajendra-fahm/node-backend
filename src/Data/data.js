const data =[
    {
        id:1,
        option1:"v1",
        list1:[
            {
                id:11,
                name:"option11"
            },
            {
                id:11,
                name:"option12"
            },
            {
                id:13,
                name:"option13"
            }
        ]
    },
    {
        id:2,
        option1:"v2",
        list2:[
            {
                id:21,
                name:"option21"
            },
            {
                id:22,
                name:"option22"
            },
            {
                id:23,
                name:"option23"
            }
        ]
    }
]


// date formated like 04/07/2024
const formateDate = (date) =>{
    const currDate = new Date (date)
}
const printDate = formateDate(new Date)
console.log(printDate)