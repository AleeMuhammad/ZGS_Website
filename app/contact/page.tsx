"use client";

import { Nav } from "@/components/hero/nav";
import { Footer } from "@/components/footer/footer";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { toast } from "sonner"; 
import emailjs from "@emailjs/browser";


type ContactFormValues = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

export default function ContactPage() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormValues>();

   const onSubmit = async (data: ContactFormValues) => {
    try {
        await emailjs.send(
            "service_wfozjqn",
            "template_mzxssbb",
            {
                name: data.name,
                email: data.email,
                phone: data.phone,
                message: data.message,
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );

        toast.success("Message sent successfully!");
        reset();
    } catch (error) {
        console.error(error);
        toast.error("Failed to send message. Please try again.");
    }
};


    return (
        <>
        <main className="min-h-screen py-7  bg-background text-foreground overflow-x-hidden">
            <div className="px-8">

            <Nav />
            </div>

            <section className="relative pt-32 pb-20 px-6 md:pt-30 md:pb-32">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/20 blur-[120px] rounded-full opacity-30" />
                </div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                                Get in touch
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                                Have a question or query? We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Email</h3>
                                    <p className="text-muted-foreground">zaingeneralstore759@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Phone</h3>
                                    <p className="text-muted-foreground">+92 335 1293619</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-card border border-border/50 rounded-3xl p-8 shadow-2xl shadow-primary/5"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium ml-1">
                                        Name <span className="text-destructive">*</span>
                                    </label>
                                    <input
                                        id="name"
                                        {...register("name", { required: "Name is required" })}
                                        className="flex h-12 w-full rounded-xl border border-input bg-background/50 px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200"
                                        placeholder="Enter your name"
                                    />
                                    {errors.name && (
                                        <p className="text-destructive text-sm ml-1">{errors.name.message}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium ml-1">
                                        Phone <span className="text-destructive">*</span>
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        {...register("phone", { required: "Phone is required" })}
                                        className="flex h-12 w-full rounded-xl border border-input bg-background/50 px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200"
                                        placeholder="Enter your phone number"
                                    />
                                    {errors.phone && (
                                        <p className="text-destructive text-sm ml-1">{errors.phone.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium ml-1">
                                    Email <span className="text-destructive">*</span>
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                    className="flex h-12 w-full rounded-xl border border-input bg-background/50 px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200"
                                    placeholder="Enter your email"
                                />
                                {errors.email && (
                                    <p className="text-destructive text-sm ml-1">{errors.email.message}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium ml-1">
                                    Message <span className="text-destructive">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    {...register("message", { required: "Message is required" })}
                                    className="flex w-full rounded-xl border border-input bg-background/50 px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-all duration-200"
                                    placeholder="How can we help you?"
                                />
                                {errors.message && (
                                    <p className="text-destructive text-sm ml-1">{errors.message.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity disabled:opacity-70 flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
                                    </>
    );
}