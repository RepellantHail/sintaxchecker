export default function FileUploader  ({ onFileTitle,onFileContent  })  {

    const handleFileChange = (event) => {
        const file = event.target.files[0];
    
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const fileContent = e.target.result;
            onFileContent(fileContent);
          };
    
          reader.readAsText(file);
          onFileTitle(file.name);
        }
      };

  return (
    <div className='p-2'>
      <label for='#file'>Seleccione su archivo 
        <input id='file' type="file" onChange={handleFileChange} />
      </label>
    </div>
  );
};
