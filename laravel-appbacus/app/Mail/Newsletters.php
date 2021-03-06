<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class Newsletters extends Mailable
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
    public function __construct($email,$request,$text,$button,$urls)
    {
        $this->email=$email;
        $this->request=$request;
        $this->text=$text;
        $this->button=$button;
        $this->urls=$urls;
        // dd($urls);
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $subject="🎓AppBacus Informa: que te has inscrito con el correo ".$this->request['email'];
        $text=$this->text;
        $button=$this->button;
        $urls=$this->urls;
        return $this->subject($subject)
        ->view('vendor.mail.newsletter.newsletter',['text'=>$subject." ".$text,"button"=>$button,"urls"=>$urls]);
    }
}
