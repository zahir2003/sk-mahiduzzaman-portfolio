"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/data/portfolio";

export default function MessageForm() {
    const [sent, setSent] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const subject = String(formData.get("subject") || "Portfolio message");
        const message = String(formData.get("message") || "");
        const sender = String(formData.get("email") || "");
        const body = `${message}\n\nReply to: ${sender}`;
        window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setSent(true);
    }

    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <div className="message-form-heading"><span>DIRECT MESSAGE</span><span>MAIL CLIENT</span></div>
            <div className="message-fields">
                <label><span>Your email</span><input name="email" type="email" placeholder="you@example.com" required /></label>
                <label><span>Subject</span><input name="subject" type="text" placeholder="Let&apos;s work together" required /></label>
            </div>
            <label><span>Message</span><textarea name="message" rows={5} placeholder="Tell me a little about your idea..." required /></label>
            <button className="button button-primary message-submit" type="submit">{sent ? "MESSAGE READY" : "SEND MESSAGE"} <span aria-hidden="true">↗</span></button>
        </form>
    );
}