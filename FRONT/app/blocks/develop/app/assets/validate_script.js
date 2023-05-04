/* ============================ validate_script START ================================================================= */
const inputsEvents = 'change keyup input click';

function validate(form, options) {
   let settings = {
      errorFunction: null,
      submitFunction: null,
      highlightFunction: null,
      unhighlightFunction: null,
   }
   $.extend(settings, options);

   let $form = $(form);

   //checking if the form exists
   if ($form.length && $form.attr('novalidate') === undefined) {
      $form.on('submit', function (e) {
         e.preventDefault();
      });

      $form.validate({
         errorClass: 'errorText', //adds class error
         focusCleanup: true,
         focusInvalid: false,
         invalidHandler: function (event, validator) {
            if (typeof (settings.errorFunction) === 'function') {
               settings.errorFunction(form);
            }
         },
         errorPlacement: function (error, element) {
            error.appendTo(element.closest('.errorFunction'));
         },
         highlight: function (element, errorClass, validClass) {
            $(element).addClass('error');
            $(element).closest('.form__item').addClass('error').removeClass('valid');//adds an error class when the field is not valid
            if (typeof (settings.highlightFunction) === 'function') {
               settings.highlightFunction(form);
            }
         },
         unhighlight: function (element, errorClass, validClass) {
            $(element).removeClass('error');
            if ($(element).closest('.form__item').is('.error')) {
               $(element).closest('.form__item').removeClass('error').addClass('valid');
            }
            if (typeof (settings.unhighlightFunction) === 'function') {
               settings.unhighlightFunction(form);
            }
         },
         submitHandler: function (form) {
            if (typeof (settings.submitFunction) === 'function') {
               settings.submitFunction(form);
            } else {
               $form[0].submit();
            }
         },
      });

      $.validator.addMethod('regex', function (value, element, regexp) {
         let re = new RegExp(regexp);
         return this.optional(element) || re.test(value);
      });

      $('[required]', $form).each(function () {
         $(this).rules('add', {
            required: true,
         });
      });
      if ($('.name', $form).length) {
         $('.name', $form).rules('add', {
            minlength: 1,
         });
      }
      if ($('.email', $form).length) {
         $('.email', $form).rules('add', {
            email: true,
            minlength: 10,
            regex: /^.+@.+\..+$/,
            // messages: {
            //    regex: 'Неверный email',
            //    minlength: 'Недостаточно символов',
            //    email: 'Неверный email'
            // }
         });
      }
   }
}

// sending the form via HTTP
function validationCallForm(form) {

   let thisForm = $(form);
   let formSur = thisForm.serialize();
   $.ajax({
      url: thisForm.attr('action'),
      data: formSur,
      method: 'POST',
      success: function (data) {
         if (data.trim() === 'true') {
            thisForm.trigger('reset');
         } else {
            thisForm.trigger('reset');
         }
      },
      error: function (error) {
         console.log(error)
      },
   });
}

// validated input type:text,number
function validTextNumbers() {
   //cant enter text, only numbers
   $(document).on(inputsEvents, 'input[data-input=\'number\']', function () {
      if (this.value.match(/[^0-9]/g)) {
         this.value = this.value.replace(/[^0-9]/g, '');
      }
   });
   //cant enter numbers, only text
   $(document).on(inputsEvents, 'input[data-input=\'text\']', function () {
      if (this.value.match(/[^А-Яа-яA-Za-z ]/g)) {
         this.value = this.value.replace(/[^А-Яа-яA-Za-z ]/g, '');
      }
   });
   //never space
   $(document).on(inputsEvents, 'input[data-space=\'never\']', function () {
      if (this.value.match(/[ ]/g)) {
         this.value = this.value.replace(/[ ]/g, '');
      }
   });
   $(document).on(inputsEvents, 'input[data-space=\'no\']', function () {
      let str = $(this).val();
      let arr = str.split('');
      if (str[0] === ' ') {
         arr[0] = '';
         let result = arr.join('');
         $(this).val(result);
      }
      for (let i = 0; i < arr.length - 1; i++) {
         if (arr[i] === ' ' && arr[i + 1] === ' ') {
            arr[i + 1] = '';
            let result2 = arr.join('');
            $(this).val(result2);
         }
      }
   });
}

/* ============================ validate_script END ================================================================= */
