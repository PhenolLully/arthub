import {useParams} from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { GET_PICTURE } from '../../utils/queries';

export default function SinglePost(){
    const {id}= useParams()
    const {data} = useQuery(GET_PICTURE, {
        variables: {id: id}
    })

    const pictureData = data?.picture || {}
    console.log(pictureData);
    return(
        <>
        <div>
            <img src={pictureData.imageUrl} alt="" />
        </div>
        </>
    )
}