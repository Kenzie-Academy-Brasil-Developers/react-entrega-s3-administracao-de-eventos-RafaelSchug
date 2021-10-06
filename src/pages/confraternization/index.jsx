import Header from '../../components/Header';
import { useConfraternization } from '../../providers/confraternization';

const Confraternization = () => {

    const {confraternizationList} = useConfraternization();

    return (
        <>
            <Header></Header>
            <div>Confraternization</div>
            <div>Confraternization List:</div>
            <div>
                {confraternizationList.map((item, index)=>{
                    return (
                        <div key={index}>
                            <h4>{item.name}</h4>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Confraternization;