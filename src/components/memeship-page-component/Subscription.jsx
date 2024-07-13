import { Check } from 'lucide-react';


const Subscription = () => {
  return (
    <>
      <div className='overflow-auto h-[670px] p-19 text-center'>
        <h1 className='pb-5 font-bold text-[30px] text-white'>Subscription Plans</h1>
        <section className='flex justify-center items-center space-x-20 pt-8'>

          {/* basic plan */}
           <div className='h-[410px] w-[380px] border-2 rounded-lg bg-white shadow-2xl'>
              <div className='text-left h-20 bg-blue-500 rounded-t-lg'>
                <h1 className='font-semibold p-2 pl-5 text-[25px] text-white'>Basic Plan
                <h1 className='text-[13px] text-blue-200'>for Basic Use</h1>
                </h1>
              </div>

              <section>
                  <div>
                    <p className='text-left text-[14px] p-6 font-medium text-slate-500'>Get started with essential features to manage your orders efficiently. Perfect for small businesses and startups.</p>
                  </div>

                  
                  <div className='text-left p-6 text-[18px] text-slate-700 font-medium space-y-1'>
                    <p className='flex text-[14px]'><Check className='pt-1 pb-1 h-7 w-7 text-green-500'/>unlimited projects</p>
                    <p className='flex text-[14px]'><Check className='pt-1 pb-1 h-7 w-7 text-green-500'/>priority support</p>
                    <p className='flex text-[14px]'><Check className='pt-1 pb-1 h-7 w-7 text-green-500'/>Dedicated account manager</p>
                  </div>

                  <div className='flex pl-6 pt-5 pr-6 space-x-24'>
                    <h1 className='text-[25px]'>₹1000/Month</h1>
                    <button className='w-[80px] rounded-md border-blue-500 border-2 text-[15px] hover:bg-blue-500 hover:border-0 hover:text-white transition shadow-2xl'>
                      Subscribe</button>
                  </div>
              </section>

           </div>

           {/* pro plan */}
           <div className='h-[410px] w-[380px] border-2 rounded-lg bg-white shadow-2xl'>
              <div className='text-left h-20 bg-blue-800 rounded-t-lg'>
                <h1 className='font-semibold p-3 pl-5 text-[25px] text-white'>Professional Plan
                  <h1 className='text-[13px] text-blue-400'>for Professional Use</h1>
                </h1>
              </div>

              <section>
                  <div>
                    <p className='text-left text-[14px] p-6 font-medium text-slate-500'>Upgrade to our Professional Plan for advanced tools and analytics to streamline your order management and boost productivity.</p>
                  </div>

                 
                  <div className='text-left p-6 text-[18px] text-slate-700 font-medium space-y-1'>
                    <p className='flex text-[14px]'><Check className='pt-1 pb-1 h-7 w-7 text-green-500'/>unlimited projects</p>
                    <p className='flex text-[14px]'><Check className='pt-1 pb-1 h-7 w-7 text-green-500'/>priority support</p>
                    <p className='flex text-[14px]'><Check className='pt-1 pb-1 h-7 w-7 text-green-500'/>Dedicated account manager</p>
                  </div>

                  <div className='flex pl-6 pt-5 pr-6 space-x-24'>
                    <h1 className='text-[25px]'>₹2000/Month</h1>
                    <button className='w-[80px] rounded-md border-blue-800 border-2 text-[15px] hover:bg-blue-800 hover:border-0 hover:text-white transition shadow-2xl'>Subscribe</button>
                  </div>
              </section>

           </div>

          {/* enterprise plan */}
           <div className='h-[410px] w-[380px] border-2 rounded-lg bg-white shadow-2xl'>
            <div className='text-left h-20 bg-blue-950 rounded-t-lg'>
              <h1 className='font-semibold p-3 pl-5 text-[25px] text-white'>Enterprise Plan
                <h1 className='text-[13px] text-blue-600'>for Organisational Use</h1>
              </h1>
            </div>

            <section>
                  <div>
                    <p className='text-left text-[14px] pl-6 pt-6 pr-4 font-medium text-slate-500'>Experience the ultimate in order management with our Enterprise Plan, offering premium features, personalized support, and scalability for large businesses.</p>
                  </div>

                  <div className='text-left p-6 text-[18px] text-slate-700 font-medium space-y-1'>
                    <p className='flex text-[14px]'><Check className='pt-1 pb-1 h-7 w-7 text-green-500'/>unlimited projects</p>
                    <p className='flex text-[14px]'><Check className='pt-1 pb-1 h-7 w-7 text-green-500'/>priority support</p>
                    <p className='flex text-[14px]'><Check className='pt-1 pb-1 h-7 w-7 text-green-500'/>Dedicated account manager</p>
                  </div>

                  <div className='flex pl-6 pt-5 pr-6 space-x-24'>
                    <h1 className='text-[25px]'>₹3000/Month</h1>
                    <button className='w-[80px] rounded-md border-blue-500 border-2 text-[15px] hover:bg-blue-950 hover:border-0 hover:text-white transition shadow-2xl'>Subscribe</button>
                  </div>
            </section>

           </div>

        </section>

      </div>
    </>
  );
};

export default Subscription;
