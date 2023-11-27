
function App() {
  const resumeUrl = process.env.PUBLIC_URL + '/files/cloud-lab.pdf';
  return (
    <div className="h-screen">
      <div className="p-5 font-mono fixed text-xl font-semibold w-full">
     <a href={resumeUrl} target="_blank" rel="noreferrer noopener" download="Cloud lab.pdf">Hello World!</a>
      </div>
    </div>
  );
}

export default App;
