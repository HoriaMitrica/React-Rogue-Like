import {useNavigate} from 'react-router-dom'
import { FERoutes } from '../../models/enum';

export const Homepage=()=> {

    const navigate=useNavigate();
    
    const onRedirectClick=(path:string)=>{
        navigate(path);
    }

  return (
    <>
    <div>
      This is homepage
    </div>
    <button onClick={()=>{onRedirectClick(FERoutes.Game)}}>
        Start
    </button>
    <button onClick={()=>{onRedirectClick(FERoutes.CharacterCreation)}}>
        create character
    </button>
    </>
  )
}
