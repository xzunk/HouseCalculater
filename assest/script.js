 
        new Vue({
            el: '#app',
            data: {
                index: null,
                result: null,
                errorMessage: '',
                inputBorder: '3px solid #142951',
                buttonBorder: '2px solid #142951',
                resultBorder: '5px solid #142951'
            },
            computed: {
                resultClass: function() {
                    return {
                        'bg-danger': this.result === "Gunanada",
                        'bg-primary': this.result === "Jayathilaka",
                        'bg-success': this.result === 'Olcott',
                        'bg-warning': this.result === 'Dharmapala',
                        'text-center': true,
                        'mt-4': true,
                        'p-3': true,
                        'text-white': true
                    };
                }
            },
            methods: {
                calculateIndex: function() {
                    if (!this.index) {
                        this.errorMessage = 'Please enter a Indexnumber.';
                        return;
                    }
                    this.errorMessage = '';
                    var h = this.index % 4;
                    if (h === 3) {
                        this.result = "Olcott";
                    } else if (h === 2) {
                        this.result = "Jayathilaka";
                    } else if (h === 1) {
                        this.result = "Gunanada";
                    } else {
                        this.result = "Dharmapala";
                    }                 
                },
                clearInput: function() {
                    this.index = null;
                    this.result = null;
                    this.errorMessage = '';
                }
            }
        });
