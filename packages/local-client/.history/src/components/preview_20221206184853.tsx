import { useEffect, useRef } from "react"

interface PreviewProps {
  code: string;
}

const html = `
<html>
  <head>
  <body>
    <div id="root">
    <script>
      window.addEventListener('message',(event) =>{
        try{
          eval(event.data)
        } catch(err){
          const root = document.querySelector('#root');
          root.innerHTML = '<div style="color:red;"><h4>Runtime Error</h4>' + err + '</div>'
          console.error(err);
        }
      }, false)
    </script>
    </div>
  </body>
  </head>
</html>

`;

const Preview: React.FC<PreviewProps> = ({ code }) => {
  const iframe = useRef<any>()

  useEffect(() => {
    // Reset iframe
    iframe.current.srcdoc = html;
  }, [code])
  return <iframe />
}

export default Preview;