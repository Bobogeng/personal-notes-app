import { useNavigate } from "react-router-dom";

function useHandlerDetail(defaultValue) {
    const navigate = useNavigate();

    const onDetailHandler = (id) => {
        defaultValue(id);
        navigate("/");
    };

    return [onDetailHandler];
}

export default useHandlerDetail;
