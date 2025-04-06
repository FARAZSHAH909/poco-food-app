"use client";

import { MainLayout } from "@/components/layout/MainLayout";
import { CartProvider } from "@/lib/context/CartContext";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <CartProvider>
      <MainLayout>
        <div className="bg-[#f5f5f5] py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We'd love to hear from you! Whether you have a question about our
                menu, locations, or anything else, our team is ready to answer
                your questions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-xl font-bold mb-6">Our Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                      <div>
                        <h3 className="font-medium">Address</h3>
                        <p className="text-muted-foreground">
                          504 White St.<br />
                          Dawsonville, GA 30534<br />
                          United States
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-primary mr-3 mt-1" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-muted-foreground">(850) 435-4155</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-primary mr-3 mt-1" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-muted-foreground">
                          info@pocofood.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-primary mr-3 mt-1" />
                      <div>
                        <h3 className="font-medium">Opening Hours</h3>
                        <p className="text-muted-foreground">
                          Monday – Friday: 8am – 10pm<br />
                          Weekend: 9am – 11pm
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary text-white p-6 rounded-lg">
                  <h2 className="text-xl font-bold mb-4">Order For Delivery</h2>
                  <p className="mb-4">
                    Want to order food from Poco to enjoy at home? Call us or
                    order online!
                  </p>
                  <Button variant="secondary" size="lg" className="w-full">
                    Order Online
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>
                {isSuccess ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6">
                    <h3 className="font-bold text-lg">Message Sent!</h3>
                    <p>
                      Thank you for contacting us. We'll get back to you as soon
                      as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-1"
                      >
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-1"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-1"
                      >
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </CartProvider>
  );
}
