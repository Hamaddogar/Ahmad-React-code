import React, { useState } from 'react';
import '../form/style/style.css'

const Mappingfunction = () => {

    const [searchvalue, setSearch] = useState('')
    const [getserach, setgetSearch] = useState([])

    const data_all = [
        { name: "Muhammad Hamad", fatherName: "Muhammad Shafiq", professtional: "IT Developer", Age: "23" },
        { name: " Ali kubern", fatherName: "Muhammad ALI", professtional: "  Developer", Age: "23" },
        { name: " Hamad", fatherName: " Ali sb ", professtional: " police", Age: "23" },
        { name: " Fazan", fatherName: " Kuberab ", professtional: "Madeical Officer", Age: "23" },
        { name: " Muskan", fatherName: " Fazan Ali ", professtional: " RPO", Age: "23" },
        { name: " Ali sb", fatherName: "kubern ali", professtional: " Kernal", Age: "23" },
        { name: " Mustaq", fatherName: "Muhammad Ali ", professtional: " Sports Man", Age: "23" },
        { name: "Batti sb", fatherName: "Ali", professtional: " Football player", Age: "23" },
    ]

    const searchHunderler = (e) => {
        setSearch(e.target.value)


        //    let a=6;
        //     if(a==6)
        //     {

        //         alert("this is ture condition")
        //     }
        //     else{
        //         alert("this is my  flase condition ")
        //     }
        //      a==6? alert("this is ture condition"): alert("this is my  flase condition ")

        let getdata = data_all.filter((item) => {
            return item.name ? item.name.toLowerCase().includes(searchvalue ? searchvalue.toLowerCase() : "") : ""


        })

        // let getdata = data_all.filter((item) => {
        //     return item.name ? item.name.toLowerCase().includes(searchvalue ? searchvalue.toLowerCase() : '') : ""

        // })
        setgetSearch(getdata)

    }


    return (

        <div>
            <input placeholder="Search .." type="text" onChange={searchHunderler} />
            <table>
                <tr>
                    <th>Name</th>
                    <th>Father Name</th>
                    <th> professtional</th>
                    <th> Age</th>

                </tr>



                {
                    getserach.length != 0 ? getserach

                        .map((item, index) => {
                            return <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.fatherName}</td>
                                <td>{item.professtional}</td>
                                <td>{item.Age}</td>
                            </tr>




                        }) :


                        data_all.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.fatherName}</td>
                                <td>{item.professtional}</td>
                                <td>{item.Age}</td>
                            </tr>

                        })}

            </table>
        </div>
    );
};

export default Mappingfunction;