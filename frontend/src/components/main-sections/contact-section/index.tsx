'use client'

import { sendEmail } from '@/utils/sendEmail';
import { useForm } from 'react-hook-form';

export type TFormData = {
    name: string;
    email: string;
    message: string;
    honeypot?: string | null
};

export default function ContactSection() {
    const { register, handleSubmit } = useForm<TFormData>();

    const onSubmit = (data: TFormData) => {
        if (data.honeypot) {
            return console.warn('Bot detected')
        }

        sendEmail(data);
    }

    return (
        <div 
        id="contact"
        className="lg:mb-10 flex flex-col gap-y-4"
        >
            <h3 className="block lg:hidden text-center w-full border-b-8 border-accent font-bold text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">CONTACT</h3>

            <form
            className="flex flex-col gap-y-6 lg:gap-y-8 bg-secondary-bg p-4 rounded-2xl"
            onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex w-full flex-col gap-y-6 lg:gap-y-0 lg:flex-row gap-x-4">
                    <div className="flex flex-col w-full lg:w-2/5 gap-y-1">
                        <label className="font-roboto-slab font-bold text-xl">Name</label>
                        <input 
                        type="text"
                        placeholder="Your Name"
                        className="bg-functional outline-none rounded-2xl px-4 py-3 
                        font-roboto-slab font-normal text-lg text-main-text placeholder:text-secondary-text"
                        {...register('name', { required: true })}
                        />
                    </div>
                    
                    <div className="flex flex-col w-full lg:w-3/5 gap-y-1">
                        <label className="font-roboto-slab font-bold text-xl">Email</label>
                        <input 
                        type="email" 
                        placeholder="Your Email"
                        className="bg-functional outline-none rounded-2xl px-4 py-3 
                        font-roboto-slab font-normal text-lg text-main-text placeholder:text-secondary-text"
                        {...register('email', { required: true })}
                        />
                    </div>
                </div>
                
                <div className="flex flex-col w-full gap-y-1">
                    <label className="font-roboto-slab font-bold text-xl">Message</label>
                    <textarea 
                    rows={4}
                    placeholder="Hey Oleh, I love your website! I would love to talk with you. Looking forward to hearing from you!"
                    className="bg-functional outline-none rounded-2xl px-4 py-3 scrollbar-hide
                    font-roboto-slab font-normal text-lg text-main-text placeholder:text-secondary-text"
                    {...register('message', { required: true })}
                    />
                </div>

                <input 
                type="text"
                className="hidden"
                {...register('honeypot', { required: false })}
                />
                
                <button 
                className="w-full bg-accent text-main-text font-roboto-slab font-bold text-2xl text-center py-3 rounded-full
                transition-opacity opacity-75 hover:opacity-100">
                    Send Message
                </button>
            </form>
        </div>
    )
}