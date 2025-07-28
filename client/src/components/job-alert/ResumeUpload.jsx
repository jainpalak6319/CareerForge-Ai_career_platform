import { useState, useRef } from 'react';

const ResumeUpload = ({ onFileUpload, uploadedResume, onRemoveFile }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      onFileUpload(e.target.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files.length > 0) {
      onFileUpload(e.dataTransfer.files[0]);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (fileName) => {
    if (fileName.endsWith('.pdf')) return 'file-pdf';
    if (fileName.endsWith('.doc') || fileName.endsWith('.docx')) return 'file-word';
    return 'file';
  };
  
  const handleRemoveFile = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onRemoveFile();
    // Clear the file input
    const fileInput = document.getElementById('resumeFile');
    if (fileInput) {
      fileInput.value = '';
    }
  };
  return (
    <section 
      className={`resume-upload-section ${isDragging ? 'dragging' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="upload-area">
        <div className="upload-icon">
          <i className="fas fa-cloud-upload-alt"></i>
        </div>
        <div className="upload-text">Upload Your Resume for Smart Job Matching</div>
        <div className="upload-subtext">
          {isDragging ? 'Drop your file here' : 'Drag & drop your file or click to browse'}
        </div>
        <button 
          className="upload-btn"
          onClick={() => fileInputRef.current.click()}
        >
          <i className="fas fa-upload"></i> Choose Resume File
        </button>
        <input 
          ref={fileInputRef}
          type="file" 
          className="file-input"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
        />
        
        {uploadedResume && (
          <div className="uploaded-file show">
            <div className="file-icon">
              <i className={`fas fa-${getFileIcon(uploadedResume.name)}`}></i>
            </div>
            <div className="file-info">
              <div className="file-name">{uploadedResume.name}</div>
              <div className="file-size">{formatFileSize(uploadedResume.size)}</div>
            </div>
            <div>
               <button
              onClick={handleRemoveFile}
              style={{
                background: '#e74c3c',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#c0392b'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#e74c3c'}
              title="Remove file"
            >
              ✕
            </button>
            </div>
             
            </div>
          
        )}
      </div>
    </section>
  );
};

export default ResumeUpload;