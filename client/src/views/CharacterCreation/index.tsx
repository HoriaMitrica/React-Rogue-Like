import {useNavigate} from 'react-router-dom'
import { FERoutes } from '../../models/enum';

export const CharacterCreation=()=> {

    const navigate=useNavigate();
    
    const onRedirectClick=(path:string)=>{
        navigate(path);
    }
    
  return (
    <>
    <div>
      This is character creation
    </div>
    <button onClick={()=>{onRedirectClick(FERoutes.Game)}}>
        Start
    </button>
    <button onClick={()=>{onRedirectClick(FERoutes.Homepage)}}>
        homepage
    </button>
    </>
  )
}
