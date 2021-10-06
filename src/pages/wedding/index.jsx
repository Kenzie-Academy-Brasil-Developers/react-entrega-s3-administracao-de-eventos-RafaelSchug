import Header from "../../components/Header";
import { useWedding } from "../../providers/wedding";

const Wedding = () => {

    const {weddingList} = useWedding();

    return (
        <>
            <Header></Header>
            <div>Wedding</div>
            <div>Wedding List:</div>
            <div>
                {weddingList.map((item, index) => {
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

export default Wedding;