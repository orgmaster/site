import {Fill, Outline} from './styles';

export default function Button(props){
    return props.outline ? <Outline {...props} /> : <Fill {...props} />
}