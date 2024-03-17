/* eslint-disable react/prop-types */
import Logo from "../../../Shared/Logo";


// eslint-disable-next-line react/prop-types
const CardAchieve = ({items}) => {
    const {nameContest, money, yourName, creatorName,   } =items;
    return (
        <div>
              <div>
          <section  className="max-w-2xl rounded-lg shadow-sm px-6 py-8 mx-auto bg-rose-50">
    <header>
        <div className="flex gap-2">
<Logo/>
        </div>
    </header>

    <main className="mt-7">
        <h2 className="text-gray-700 text-2xl dark:text-gray-200">Hi <span className="text-red-500">{yourName}</span>,</h2>

        <p className="mt-2 leading-loose text-gray-600 text-2xl dark:text-gray-300">
        <span className="text-red-500 font-extrabold text-6xl">C</span>ongratulations, Recently You Win  <q className="text-red-500 font-semibold">{nameContest}</q> Contest Which Is Created By  <span className="font-semibold text-red-500"> <q>{creatorName}</q> </span>. You Win <span className="text-red-500 font-semibold text-3xl">{money}$</span> Price Money As The Reward Of Contest & All Documentation & Certification is sent to your email.
        </p>
        
        <p className="mt-8 text-gray-600 text-2xl dark:text-gray-300">
            Thanks, <br/>
            Contes Buddy Team
        </p>
    </main>
</section>

            
        </div>  
        </div>
    );
};

export default CardAchieve;