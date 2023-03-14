import React from 'react'
import "./style.scss"
import { useState } from 'react';
import {generateUploadURL} from '../Services/S3';

export const DragDropFile =() =>{
    const [highlight, setHighlight] = React.useState(false);
    const [preview, setPreview] = React.useState("");
    const [drop, setDrop] = React.useState(false);
    const [file,setFile] = React.useState("");
    const handleEnter = (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("enter!");
  
      preview === "" && setHighlight(true);
    };
  
    const handleOver = (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("over!");
  
      preview === "" && setHighlight(true);
    };
  
    const handleLeave = (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("leave!");
      setHighlight(false);
    };
  
    const handleUpload = (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("drop!");
      setHighlight(false);
      setDrop(true);
  
      const [file] = e.target.files || e.dataTransfer.files;
      uploadFile(file)
    };
    

    //Uploading file to bucket
    async function uploadFile(file) {
      const reader = new FileReader();
      reader.readAsBinaryString(file);
      console.log(file);
      reader.onload = () => {
        // this is the base64 data
        const fileRes = btoa(reader.result);
        console.log(`data:image/jpg;base64,${fileRes}`);
        setPreview(`data:image/jpg;base64,${fileRes}`);
      };
  
      reader.onerror = () => {
        console.log("There is a problem while uploading...");
      };

      const url = await generateUploadURL();

      console.log(url)
      await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data"
        },
        body: file
      })
    
      const imageUrl = url.split('?')[0]
      console.log(imageUrl)

    }
    
    const balls =() =>{
      
      const url = generateUploadURL();

      console.log(url)
    }
  
    return (
      <>
        <label className="mt-5"for="image-up">Image</label>

        <div
        id='image-up'
          onDragEnter={(e) => handleEnter(e)}
          onDragLeave={(e) => handleLeave(e)}
          onDragOver={(e) => handleOver(e)}
          onDrop={(e) => handleUpload(e)}
          className={`upload${
            highlight ? " is-highlight" : drop ? " is-drop" : ""
          }`}
          style={{ backgroundImage: `url(${preview})` }}
        >
          <div className="my-form">
            <p>Drop image here</p>
            <div className="upload-button">
              <input
                type="file"
                className="upload-file"
                accept="image/*"
                onChange={(e) => handleUpload(e)}
              />
              <button className="button">Upload Here</button>
            </div>
          </div>
          <a onClick={()=> uploadFile()}> Upload file to bucket</a>
        </div>
      </>
    );
};


