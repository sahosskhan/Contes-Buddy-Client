import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import TopSection from "../Contest Details/TopSection";
import Container from "../../../Components/Container";
import Swal from "sweetalert2";
import useUserData from "../../../Hooks/useUserData";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";


const RegistrationSPA = () => {
    const {user}=useAuth();
    const {userList}=useUserData();
const FilterUserList = userList.filter(item => item.email === user?.email);
const imageFilter = FilterUserList.map(user => user.image);
const nameFilter = FilterUserList.map(user => user.name);
const emailFilter = FilterUserList.map(user => user.email);
const imageString = imageFilter.join(', ');
const nameString = nameFilter.join(', ');
const emailString = emailFilter.join(', ');
    const data = useLoaderData();
    const {_id, creatorName, creatorEmail,creatorImage, nameContest,price,money,imageContest,tags,deadline, pcount} =data;
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
        const yourName = nameString;
        const yourEmail = emailString;
        const yourImage = imageString;
        const yourSubmission = data.yourSubmission;
        const id = _id;
        const winingStatus="pending";
        const paymentStatus="not paying"
        const ContestSubmitAdd =
  
        {id,pcount,winingStatus,paymentStatus, yourName, yourEmail, yourImage, yourSubmission, creatorName, creatorEmail,creatorImage,nameContest,price,money,imageContest,tags,deadline} ;
        console.log(ContestSubmitAdd); 

        fetch(
            "https://contes-buddy-server.vercel.app/contestSubmission",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(ContestSubmitAdd),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.insertedId) {
                Swal.fire({
                  title: "Your Registration On Processing...🔃",
                  text: "Now Please Pay For Complete The Registration 💸 ",
                  icon: "success",
                  confirmButtonText: `Pay ${price} $`,
                }).then((result) => {
                  if (result.isConfirmed) { 
                    navigate(`/paymentGateway/${data.insertedId}`); 
                  }
                });
              }
            });


      }


    return (
        <div>

<Helmet>
        <title>{nameContest} Registration | Contes Buddy</title>
      </Helmet>

           <Container>
          <div className='max-w-screen-lg mx-auto'>
            <div className='flex flex-col gap-6'>
              <TopSection data={data} />
            </div>
            <div >
            <div className='w-full my-10'>   
            <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='space-y-6'>

            <div className='space-y-1 text-lg'>
              <label  className='block text-gray-600'>
               Participant Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-red-300 focus:outline-red-500 rounded-md '
                {...register("yourName")}
                  name="yourName"
                type='text'
                required
                defaultValue={nameString}
                readOnly
              />
            </div>

            <div className='space-y-1 text-lg'>
              <label  className='block text-gray-600'>
              Participant email
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-red-300 focus:outline-red-500 rounded-md '
                name="yourEmail"
                {...register("yourEmail")}
                type='email'
                required
defaultValue={emailString}
readOnly
              />
            </div>

          </div>
          <div className='space-y-6'>
            <div className='space-y-1 text-lg'>
              <label  className='block text-gray-600'>
              Participant Image URL
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-red-300 focus:outline-red-500 rounded-md '
                name="yourImage"
                {...register("yourImage")}
                type='text'
                required
                defaultValue={imageString}
                readOnly
              />
              
            </div>
       

            <div className='space-y-1 text-lg'>
              <label htmlFor='description' className='block text-gray-600'>
                Submitted Task 
              </label>

              <textarea
                name="yourSubmission"
                {...register("yourSubmission")}
                className='block rounded-md focus:red-300 w-full h-40 px-4 py-3 text-gray-800  border border-red-300 focus:outline-red-500 '
              ></textarea>
            </div>
          </div>
        </div>

        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-red-500'
        >
            Checkout For Payment
        </button>
      </form>

          
            </div>
            </div>
          </div>
          </Container>    
        </div>
    );
};

export default RegistrationSPA;