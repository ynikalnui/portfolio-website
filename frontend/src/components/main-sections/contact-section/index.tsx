export default function ContactSection() {
    return (
        <div 
        id="contact"
        className="mb-10 bg-secondary-bg p-4 rounded-2xl"
        >
            <form
            className="flex flex-col gap-y-8"
            >
                <div className="flex w-full gap-x-4">
                    <div className="flex flex-col w-2/5 gap-y-1">
                        <label className="font-roboto-slab font-bold text-xl">Name</label>
                        <input 
                        type="text"
                        placeholder="Your Name"
                        className="bg-functional outline-none rounded-2xl px-4 py-3 
                        font-roboto-slab font-normal text-lg text-main-text placeholder:text-secondary-text"
                        />
                    </div>
                    
                    <div className="flex flex-col w-3/5 gap-y-1">
                        <label className="font-roboto-slab font-bold text-xl">Email</label>
                        <input 
                        type="email" 
                        placeholder="Your Email"
                        className="bg-functional outline-none rounded-2xl px-4 py-3 
                        font-roboto-slab font-normal text-lg text-main-text placeholder:text-secondary-text"
                        />
                    </div>
                </div>
                
                <div className="flex flex-col w-full gap-y-1">
                    <label className="font-roboto-slab font-bold text-xl">Message</label>
                    <textarea 
                    placeholder="Hey Oleh, I love your website! I would love to talk with you. Looking forward to hearing from you!"
                    className="bg-functional outline-none rounded-2xl px-4 py-3 
                    font-roboto-slab font-normal text-lg text-main-text placeholder:text-secondary-text"
                    />
                </div>
                
                <button 
                className="w-full bg-accent text-main-text font-roboto-slab font-bold text-2xl text-center py-3 rounded-full
                transition-opacity opacity-75 hover:opacity-100">
                    Send Message
                </button>
            </form>
        </div>
    )
}