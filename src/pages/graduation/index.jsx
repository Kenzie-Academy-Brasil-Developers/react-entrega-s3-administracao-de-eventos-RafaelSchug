import Header from "../../components/Header";
import { useGraduation } from "../../providers/graduation";

const Graduation = () => {

    const {graduationList} = useGraduation();

    return (
        <>
            <Header></Header>
            <div>Graduation</div>
            <div>Graduation List:</div>
            <div>
                {graduationList.map((item, index) => {
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

export default Graduation;