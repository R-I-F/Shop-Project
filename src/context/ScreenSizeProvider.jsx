import React from "react";

const screenSizeContext = React.createContext()

export default function ScreenSizeProvider({children}){
    const ScreenSizeObj = {
        xxSmall:false,
        xSmall:false, 
        small:false,  
        medium:false, 
        large:false,  
        xLarge:false,  
    }
    const [screenSize, setScreenSize]=React.useState({})

    React.useEffect(()=>{
        const handleResize = ()=>{
            setScreenSize(()=>{
                if(window.innerWidth>1400){
                    return({...ScreenSizeObj, xLarge:true})
                }
                else if(window.innerWidth>1200){
                    return({...ScreenSizeObj, large:true})
                }
                else if(window.innerWidth>992){
                    return({...ScreenSizeObj, medium:true})
                }
                else if(window.innerWidth>768){
                    return({...ScreenSizeObj, small:true})
                }
                else if(window.innerWidth>576){
                    return({...ScreenSizeObj, xSmall:true})
                }
                else{
                    return({...ScreenSizeObj, xxSmall:true})
                }
            })
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return ()=>{window.removeEventListener("resize", handleResize)}
      },[])
    return (
        <screenSizeContext.Provider value={screenSize}>
            {children}
        </screenSizeContext.Provider>
    )
}
export { screenSizeContext }
