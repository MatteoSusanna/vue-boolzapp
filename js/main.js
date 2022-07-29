var DateTime = luxon.DateTime;
var app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        myMessage: '',
        ricerca: '',
        showSmile: false,
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                lastAccess: '16:15',
                messages: [
                            {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            show: true,
                            status: 'sent'
                            },
                            {
                            date: '10/01/2020 15:50:00',
                            show: true,
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                            },
                            {
                            date: '10/01/2020 16:15:22',
                            show: true,
                            message: 'Tutto fatto!',
                            status: 'received'
                            }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                show: true,
                visible: true,
                lastAccess: '16:35',
                messages: [
                            {
                            date: '20/03/2020 16:30:00',
                            show: true,
                            message: 'Ciao come stai?',
                            status: 'sent'
                            },
                            {
                            date: '20/03/2020 16:30:55',
                            show: true,
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                            },
                            {
                            date: '20/03/2020 16:35:00',
                            show: true,
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                            }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                show: true,
                visible: true,
                lastAccess: '16:15',
                messages: [
                            {
                            date: '28/03/2020 10:10:40',
                            show: true,
                            message: 'La Marianna va in campagna',
                            status: 'received'
                            },
                            {
                            date: '28/03/2020 10:20:10',
                            show: true,
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                            },
                            {
                            date: '28/03/2020 16:15:22',
                            show: true,
                            message: 'Ah scusa!',
                            status: 'received'
                            }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                show: true,
                visible: true,
                lastAccess: '15:50',
                messages: [
                            {
                            date: '10/01/2020 15:30:55',
                            show: true,
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                            },
                            {
                            date: '10/01/2020 15:50:00',
                            show: true,
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                            }
                ],
            },
            {
                name: 'Ilaria',
                avatar: '_5',
                show: true,
                visible: true,
                lastAccess: '15:50',
                messages: [
                            {
                            date: '10/01/2020 15:30:55',
                            show: true,
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                            },
                            {
                            date: '10/01/2020 15:50:00',
                            show: true,
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                            }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                show: true,
                visible: true,
                lastAccess: '15:51',
                messages: [
                            {
                            date: '10/01/2020 15:30:55',
                            show: true,
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                            },
                            {
                            date: '10/01/2020 15:50:00',
                            show: true,
                            message: 'Non ancora',
                            status: 'received'
                            },
                            {
                            date: '10/01/2020 15:51:00',
                            show: true,
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                            }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                show: true,
                visible: true,
                lastAccess: '15:50',
                messages: [
                            {
                            date: '10/01/2020 15:30:55',
                            show: true,
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                            },
                            {
                            date: '10/01/2020 15:50:00',
                            show: true,
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                            }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                show: true,
                visible: true,
                lastAccess: '15:51',
                messages: [
                            {
                            date: '10/01/2020 15:30:55',
                            show: true,
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                            },
                            {
                            date: '10/01/2020 15:50:00',
                            show: true,
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                            },
                            {
                            date: '10/01/2020 15:51:00',
                            show: true,
                            message: 'OK!!',
                            status: 'received'
                            }
                ],
            }
        ], 

        arrayEmoticon:[ '⌚', '✋', '✌','⭐','😂','😈','😎','😘','😜','😡','👍','😇' ],
    },
    methods: {
        //messaggio barra sinistra = barra destra
        apriChat(indice){
            this.myMessage = ''
            this.counter = indice
        },

        //push messaggio e risposta
        pushInput(){
            if(!this.myMessage.trim() == ''){
                let newMessage = {
                    date: this.tempoReale(),
                    show: true,
                    message: this.myMessage,
                    status: 'sent'
                }
                this.contacts[this.counter].messages.push(newMessage);
                this.myMessage = ''
                setTimeout(this.push,1000); 
            }
        },
        push(){
            let risposta = {
                date: DateTime.now().toFormat('dd/LL/y HH:mm:ss'),
                message: 'ok',
                show: true,
                status: 'received'
            };

            let arrayRisp = ['Non lo so', 'Va bene', 'certo', 'Come vuoi', 'Ho da fare', 'No'];
            risposta.message = arrayRisp[this.random(0, 5)];

            this.contacts[this.counter].messages.push(risposta);        
        },
        random(min, max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        

        //filtraggio contatti
        filtraggio(){
            this.ricerca = this.ricerca.charAt(0).toUpperCase() + this.ricerca.slice(1).toLowerCase(1)
            
            this.contacts.forEach((contact) =>{
                if(contact.name.includes(this.ricerca)){
                   contact.visible = true;
                }else{
                    contact.visible = false;
                }
            })  
        },

        //apertura tendina messaggi
        apriTendina(indice){
            this.contacts[this.counter].messages[indice].show = !this.contacts[this.counter].messages[indice].show;
        },

        //eliminazione messaggi
        eliminaMessaggio(indice){
            this.contacts[this.counter].messages.splice(indice, 1);
        },

        //gestione tempo reale
        tempoReale(){
            return DateTime.now().toFormat('dd/LL/y HH:mm:ss')
        },

        //emoticon
        emoticon(){
            this.showSmile = !this.showSmile
        }


    },
  })