import TextInput from "../../components/TextInput"

const withEye = (WrappedComponent: any) =>{
    
    return (props:any) =>(
        <WrappedComponent 
        {...props}
        />
    )
   

}

export const WithEye = withEye(TextInput)