"use client"
import React, {useState} from "react";


export default function MaterialForm() {

const [MaterialFormData, setFormData] = useState(
            {
                textSearch: "",
                materialType : "",
                materialBrand : "",
                colors : "",
            }
        )

const handleChange = (e) => {
        const { name, value, type, options} = e.target
        if (type === "checkbox")
        {
            const selectedOptions = Array.from(options)
            .filter((option) => option.selected)
            .map((option) => option.value);
            setFormData({...MaterialFormData, [name]: selectedOptions });
        } else {
            setFormData({...MaterialFormData, [name]: value});
        }
        }

const handleSubmit = (e) => 
    {
        e.preventDefault();
        console.log("Material Form Data:", MaterialFormData);

    }
    return(
        <form onSubmit = {handleSubmit} id = "materialSearchForm">
            <div className="PageTitle"><h1><b>Find a Material!</b></h1></div>
                        <div className="search-container">
                            <input type="text" placeholder="Search..." className="fa fa-search"
                            id = "textSearch" name = "textSearch" value = {MaterialFormData.textSearch} onChange = {handleChange}/>
                        </div>
                        <div className="Search">
                <h2>Narrow Your Search Here!</h2>
                <div className="input-box">
                    <label><b>Type of Material:</b></label>
                    <select name="materialType" id="materialType" value = {MaterialFormData.materialType} onChange={handleChange}>
                    <option  value = ""></option>
                    <option value="yarn">Yarn</option>
                    <option value="fabric">Fabric</option>
                    <option value="thread">Thread</option>
                    <option value="other">Other</option>
                    </select>
                </div>
                <div className="input-box">
                    <label><b>Brand:</b></label>
                    <select name="materialBrand" id="materialBrand" value = {MaterialFormData.materialBrand} onChange = {handleChange}>
                    <option value = ""></option>
                    <option value="lionBrand">Lion Brand</option>
                    <option value="bernat">Bernat</option>
                    <option value="redHeart">Red Heart</option>
                    <option value="other">Other</option>
                    </select>
                </div>
                <div className="input-box">
                    <label htmlFor = "colors"><b>Color:</b></label>
                    <select name="colors" id="colors" value = {MaterialFormData.colors} onChange = {handleChange}>
                    <option value = ""></option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="purple">Purple</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                    <option value="pink">Pink</option>
                    <option value="other">Other</option>
                    </select>
                </div>
                <button type="submit" className="btn">Submit</button>
                </div>
            </form>
    );
};
