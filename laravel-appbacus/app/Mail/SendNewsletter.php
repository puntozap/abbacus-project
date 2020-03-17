<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendNewsletter extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    private $email;
    private $request;
    private $text;
    private $button;
    private $urls;
    public function __construct($email,$text,$button,$urls)
    {
        $this->email=$email;
        // $this->request=$request;
        $this->text=$text;
        $this->button=$button;
        $this->urls=$urls;
        // dd($request);
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $subject="🎓AppBacus Notifica un nuevo Mensaje para:  ".$this->email;
        $text=$this->text;
        $button=$this->button;
        $urls=$this->urls;
        return $this->subject($subject)
        ->view('vendor.mail.newsletter.newsletter',['text'=>$subject." ".$text,"button"=>$button,"urls"=>$urls]);
    }
}
