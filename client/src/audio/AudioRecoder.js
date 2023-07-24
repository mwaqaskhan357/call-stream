// import React, { useEffect, useCallback, useState } from "react";

// const useAudioRecorder = () => {
//   const [isRecording, setIsRecording] = useState(false);
//   const [audioChunks, setAudioChunks] = useState([]);
//   let mediaRecorder = null;

//   useEffect(() => {
//     navigator.mediaDevices
//       .getUserMedia({ audio: true })
//       .then((stream) => {
//         mediaRecorder = new MediaRecorder(stream);

//         mediaRecorder.ondataavailable = (event) => {
//           if (event.data.size > 0) {
//             setAudioChunks((prevChunks) => [...prevChunks, event.data]);
//           }
//         };
//       })
//       .catch((error) => {
//         console.error("Error accessing media devices:", error);
//       });

//     return () => {
//       if (mediaRecorder && mediaRecorder.state === "recording") {
//         mediaRecorder.stop();
//       }
//     };
//   }, []);

//   const startRecording = () => {
//     setAudioChunks([]);
//     mediaRecorder.start();
//     setIsRecording(true);
//   };

//   const stopRecording = () => {
//     if (mediaRecorder && mediaRecorder.state === "recording") {
//       mediaRecorder.stop();
//     }
//     setIsRecording(false);
//   };

//   return {
//     isRecording,
//     startRecording,
//     stopRecording,
//     audioChunks,
//   };
// };

// // const AudioRecorder = () => {
// //   const { isRecording, startRecording, stopRecording, audioChunks } =
// //     useAudioRecorder();

// //   const audioRef = React.useRef();
// //   const [audioUrl, setAudioUrl] = useState(null);

// //   useEffect(() => {
// //     if (audioChunks.length > 0) {
// //       const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
// //       setAudioUrl(URL.createObjectURL(audioBlob));
// //     }
// //   }, [audioChunks]);
// //   console.log("firstAudioChunks", audioChunks);
// //   const handlePlayAudio = () => {
// //     if (audioRef.current) {
// //       audioRef.current.play();
// //     }
// //   };

// //   return (
// //     <div>
// //       <br />
// //       <button onClick={isRecording ? stopRecording : startRecording}>
// //         {isRecording ? "Stop Recording" : "Start Recording"}
// //       </button>
// //       <button onClick={handlePlayAudio} disabled={!audioUrl}>
// //         Play Recorded Audio ugyugi
// //       </button>
// //       {audioUrl && <audio ref={audioRef} src={audioUrl} controls />}
// //     </div>
// //   );
// // };

// // export default AudioRecorder;
// const AudioRecorder = () => {
//     const { isRecording, startRecording, stopRecording, audioChunks } =
//       useAudioRecorder();
  
//     const audioRef = React.useRef();
//     const [audioUrl, setAudioUrl] = useState(null);
  
//     useEffect(() => {
//       if (audioChunks.length > 0) {
//         const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
//         setAudioUrl(URL.createObjectURL(audioBlob));
//       }
//     }, [audioChunks]);
  
//     useEffect(() => {
//       // Update the audioRef with the latest audioUrl when recording stops
//       if (!isRecording) {
//         audioRef.current.src = audioUrl;
//       }
//     }, [isRecording, audioUrl]);
  
//     const handlePlayAudio = () => {
//       if (audioRef.current) {
//         audioRef.current.play();
//       }
//     };
  
//     return (
//       <div>
//         <button onClick={isRecording ? stopRecording : startRecording}>
//           {isRecording ? "Stop Recording" : "Start Recording"}
//         </button>
//         <button onClick={handlePlayAudio} disabled={!audioUrl}>
//           Play Recorded Audio
//         </button>
//         {audioUrl && <audio ref={audioRef} src={audioUrl} controls />}
//       </div>
//     );
//   };
  
//   export default AudioRecorder;