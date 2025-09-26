import { useForm } from "react-hook-form"
import "../styles/contact.css"
import { useDispatch } from "react-redux"
import { addcontact } from "../actions/contact.action";

const contact = () => {
  const dispatch = useDispatch();
  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  const handledata = (data) => {
    dispatch(addcontact(data));
    reset();
  }

  return (
    <div className="contact_container">
      <form className="form" onSubmit={handleSubmit(handledata)}>
        <div className="inputfield">
          <input type="text" {...register("name", {
            required: "name required"
          })} placeholder="Enter a Name" />
          {errors.name && <p className="dataerror">{errors.name.message}</p>}
        </div>
        <div className="inputfield">
          <input type="email" {...register("email", {
            required: "Email required"
          })} placeholder="Enter an Email" />
          {errors.email && <p className="dataerror">{errors.email.message}</p>}
        </div>
        <div className="inputfield">
          <input type="tel" {...register("number", {
            required: "Number required"
          })} placeholder="Enter a Number" />
          {errors.number && <p className="dataerror">{errors.number.message}</p>}
        </div>
        <div className="inputfield">
          <textarea {...register("message", {
            required: "message required",
          })} placeholder="Enter a Message" />
          {errors.message && <p className="dataerror">{errors.message.message}</p>}
        </div>
        <button>Contact Us</button>
      </form>
    </div>
  )
}

export default contact