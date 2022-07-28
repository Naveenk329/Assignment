import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const CheckOut = () => {
    var navigate = useNavigate();
    var dispatch = useDispatch();
    var handleAddress = (e) => {
        e.preventDefault();
        if (address.current.value.length > 10){
            dispatch(addAddress(address.current.value));
            navigate("/Summary");
        }
        else {
            setError("Length of address should be greater than 10");
        }
    }
    return (
        <div>
            <form>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Address</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Enter address' rows="3"></textarea>
                </div>

            </form>


        </div>
    )
}
