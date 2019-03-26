angular.module("pmb_im").run(["$templateCache", function($templateCache) {$templateCache.put("templates/edit_profile_with_photo.html","<ion-modal-view class=\"new-report-modal\">\n    <ion-content class=\"new-report-scroll\">\n        <div class=\"new-report-slide\">\n          <div class=\"new-report-content\">\n            <div class=\"category-header\">\n              <h3>Editar perfil</h3>\n              <p>Estos son los datos de tu cuenta en {{AppName}}.</p>\n            </div>\n            <div class=\"list\">\n              <div class=\"text-input-header\">\n                <h3>Usuario: {{newuser.username}}</h3>\n              </div>\n              <div class=\"field-separator\"></div>\n              <p>\n                <div style=\"background: url({{actual_photo}}) no-repeat center;\" class=\"userpicture_inside_modal\" />\n              </p>\n              <div class=\"field-separator\"></div>\n              <div class=\"text-input-header\">\n                <h3>Género *</h3>\n              </div>\n              <div class=\"text-input-container\">\n                <select ng-model=\"newuser.gender\">\n                  <option value=\"\" disabled selected>Seleccione un género</option>\n                  <option value=\"Mujer\">Mujer</option>\n                  <option value=\"Hombre\">Hombre</option>\n                  <option value=\"Otro\">Otro</option>\n                  <option value=\"No responde\">No responde</option>\n                </select>\n              </div>\n              <div class=\"field-separator\"></div>\n              <div class=\"text-input-header\">\n                <h3>Interesado en conocer: *</h3>\n              </div>\n              <div class=\"text-input-container\">\n                <select ng-model=\"newuser.interested\">\n                  <option value=\"\" disabled selected>Seleccione una opción</option>\n                  <option value=\"Mujeres\">Mujeres</option>\n                  <option value=\"Hombres\">Hombres</option>\n                  <option value=\"Personas en general\">Personas en general</option>\n                </select>\n              </div>\n              <div class=\"field-separator\"></div>\n              <div class=\"text-input-header\">\n                <h3>Tu estado: *</h3>\n              </div>\n              <div class=\"text-input-container\">\n                <select ng-model=\"newuser.status\">\n                  <option value=\"\" disabled selected>Seleccione una opción</option>\n                  <option value=\"Disponible\">Disponible</option>\n                  <option value=\"Durmiendo\">Durmiendo</option>\n                  <option value=\"Con ganas de charlar\">Con ganas de charlar</option>\n                  <option value=\"Me gustaría tomar algo\">Me gustaría tomar algo</option>\n                  <option value=\"Me gustaría invitar a alguien\">Me gustaría invitar a alguien</option>\n                </select>\n              </div>\n              <div class=\"field-separator\"></div>\n              <div class=\"text-input-header\">\n              <h3>Mostrar mi ubicación a otros usuarios: *</h3>\n            </div>\n            <div class=\"text-input-container\">\n              <select ng-model=\"newuser.show_location\">\n                  <option value=\"\" disabled selected>Seleccione una opción</option>\n                  <option value=\"1\">Sí, mostrar mi ubicación</option>\n                  <option value=\"0\">No, sólo mostrarme en la lista general</option>\n                </select>\n            </div>\n            <div class=\"field-separator\"></div>\n            <div class=\"foto-header\">\n                <h3>Si deseas, puedes cambiar tu foto</h3>\n              </div>\n              <div class=\"foto-input-container\" style=\"height: 50px;\">\n                <div class=\"foto-picker\">\n                  <div ng-click=\"addImage(0,0,0,1)\" class=\"foto-icon\"></div>\n                  <div ng-click=\"addImage(1,0,0,1)\" class=\"foto-text\">o GALERÍA</div>\n                </div>\n              </div>\n              <div class=\"field-separator\"></div>\n              <div class=\"foto-footer\">\n                <h3>El archivo no puede pesar más de 2MB. (JPG)</h3>\n              </div>\n              <div class=\"field-separator\"></div>\n              <div class=\"field-separator\"></div>\n              <div id=\"error_container\"></div>\n              <div class=\"padding\">\n                <button class=\"form-button\" ng-click=\"edit_profile_ok()\">Guardar</button>\n                <div class=\"field-separator\"></div>\n                <button class=\"form-button\" ng-click=\"close_edit_profile_modal()\">Cancelar</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div style=\"height: 200px\"></div>\n    </ion-content>\n    <div id=\"spinner-inside-modal\" class=\"modal-spinner\"><h3>Aguarde por favor</h3><ion-spinner icon=\"spiral\"></ion-spinner><h3 id=\"sent_label\">Enviado: 100%</h3></div>\n</ion-modal-view>\n");
$templateCache.put("templates/edit_profile_with_photo_desktop.html","<ion-modal-view class=\"new-report-modal\">\n    <ion-content class=\"new-report-scroll\">\n        <div class=\"new-report-slide\">\n          <div class=\"new-report-content\">\n            <div class=\"category-header\">\n              <h3>Editar perfil</h3>\n              <p>Estos son los datos de tu cuenta en {{AppName}}.</p>\n            </div>\n            <div class=\"list\">\n              <div class=\"text-input-header\">\n                <h3>Usuario: {{newuser.username}}</h3>\n              </div>\n              <div class=\"field-separator\"></div>\n              <p>\n                <div style=\"background: url({{actual_photo}}) no-repeat center;\" class=\"userpicture_inside_modal\" />\n              </p>\n              <div class=\"field-separator\"></div>\n              <div class=\"text-input-header\">\n                <h3>Género *</h3>\n              </div>\n              <div class=\"text-input-container\">\n                <select ng-model=\"newuser.gender\">\n                  <option value=\"\" disabled selected>Seleccione un género</option>\n                  <option value=\"Mujer\">Mujer</option>\n                  <option value=\"Hombre\">Hombre</option>\n                  <option value=\"Otro\">Otro</option>\n                  <option value=\"No responde\">No responde</option>\n                </select>\n              </div>\n              <div class=\"field-separator\"></div>\n              <div class=\"text-input-header\">\n                <h3>Interesado en conocer: *</h3>\n              </div>\n              <div class=\"text-input-container\">\n                <select ng-model=\"newuser.interested\">\n                  <option value=\"\" disabled selected>Seleccione una opción</option>\n                  <option value=\"Mujeres\">Mujeres</option>\n                  <option value=\"Hombres\">Hombres</option>\n                  <option value=\"Personas en general\">Personas en general</option>\n                </select>\n              </div>\n              <div class=\"field-separator\"></div>\n              <div class=\"text-input-header\">\n                <h3>Tu estado: *</h3>\n              </div>\n              <div class=\"text-input-container\">\n                <select ng-model=\"newuser.status\">\n                  <option value=\"\" disabled selected>Seleccione una opción</option>\n                  <option value=\"Disponible\">Disponible</option>\n                  <option value=\"Durmiendo\">Durmiendo</option>\n                  <option value=\"Con ganas de charlar\">Con ganas de charlar</option>\n                  <option value=\"Me gustaría tomar algo\">Me gustaría tomar algo</option>\n                  <option value=\"Me gustaría invitar a alguien\">Me gustaría invitar a alguien</option>\n                </select>\n              </div>\n              <div class=\"field-separator\"></div>\n              <div class=\"text-input-header\">\n              <h3>Mostrar mi ubicación a otros usuarios: *</h3>\n            </div>\n            <div class=\"text-input-container\">\n              <select ng-model=\"newuser.show_location\">\n                  <option value=\"\" disabled selected>Seleccione una opción</option>\n                  <option value=\"1\">Sí, mostrar mi ubicación</option>\n                  <option value=\"0\">No, sólo mostrarme en la lista general</option>\n                </select>\n            </div>\n            <div class=\"field-separator\"></div>\n            <div class=\"foto-header\">\n                <h3>Si deseas, puedes cambiar tu foto</h3>\n              </div>\n              <div class=\"foto-input-container\">\n                <input type=\"file\" id=\"upimgfile\" name=\"uploadfile\" onchange=\"angular.element(this).scope().readURL(this,1)\" ng-model=\"newuser.picture_url\">\n                <div class=\"preview-img\"> <img id=\"myImage\" width=\"150\"   size=\"30\" /> </div>\n              </div>\n              <div class=\"field-separator\"></div>\n              <div class=\"foto-footer\">\n                <h3>El archivo no puede pesar más de 2MB. (JPG)</h3>\n              </div>\n              <div class=\"field-separator\"></div>\n              <div class=\"field-separator\"></div>\n              <div id=\"error_container\"></div>\n              <div class=\"padding\">\n                <button class=\"form-button\" ng-click=\"edit_profile_ok()\">Guardar</button>\n                <div class=\"field-separator\"></div>\n                <button class=\"form-button\" ng-click=\"close_edit_profile_modal()\">Cancelar</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div style=\"height: 200px\"></div>\n    </ion-content>\n    <div id=\"spinner-inside-modal\" class=\"modal-spinner\"><h3>Aguarde por favor</h3><ion-spinner icon=\"spiral\"></ion-spinner><h3 id=\"sent_label\">Enviado: 100%</h3></div>\n</ion-modal-view>\n");
$templateCache.put("templates/form.html","<ion-view title=\"Educación ALTEC\" hide-nav-bar=\"true\" class=\"\">\n  <ion-content scroll=\"false\">\n	  <ion-slide-box on-slide-changed=\"slideHasChanged($index)\">\n	    <ion-slide>\n        <div class=\"rombo_amarillo\"></div>\n    		<div class=\"edad_title\">Tu edad</div>\n        <div class=\"edad_controls\">\n      		<div ng-click=\"restarEdad();\" class=\"edad_menos\">-</div>\n      		<div class=\"edad_text\">{{form.edad}}</div>\n      		<div ng-click=\"sumarEdad();\" class=\"edad_mas\">+</div>\n        </div>\n    		<div class=\"ultimoNivelAprobado_title\">Último nivel aprobado</div>\n        <div class=\"ultimoNivelControls\">\n      		<div ng-click=\"selectUltimoNivel(\'primaria\');\" id=\"primaria\" class=\"nivel_primaria nivel\">Primaria</div>\n      		<div ng-click=\"selectUltimoNivel(\'secundaria\');\" id=\"secundaria\" class=\"nivel_secundaria nivel hidden\">Secundaria</div>\n      		<div ng-click=\"selectUltimoNivel(\'terceario\');\" id=\"terceario\" class=\"nivel_terceario nivel hidden\">Terciario</div>\n      		<div ng-click=\"selectUltimoNivel(\'universitario\');\" id=\"universitario\" class=\"nivel_universitario nivel hidden\">Universitario</div>\n        </div>\n        <div class=\"rombo_azul\"></div>\n        <div class=\"ultimoAnioAprobado_title\">¿Último año aprobado?</div>\n        <select ng-model=\"form.ultimo_anio_aprobado\" class=\"ultimoAnioAprobado_select\">\n          <option value=\"\" disabled selected>Selecciona un año</option>\n          <option>Primer año</option>\n          <option>Segundo año</option>\n          <option>Tercer año</option>\n          <option>Cuarto año</option>\n          <option>Quinto año</option>\n          <option>Sexto año</option>\n        </select>\n    		<button class=\"form_next_button\" ng-click=\"next()\">Continuar</button>\n	    </ion-slide>\n	    <ion-slide>\n        <div class=\"queQueresEstudiar_title\">¿Qué querés estudiar?</div>\n        <input type=\"text\" class=\"queQueresEstudiar_text\" />\n    		<div class=\"dondeQueresEstudiar_title\">¿Dónde querés estudiar?</div>\n    		<input type=\"text\" class=\"dondeQueresEstudiar_text\" />\n    		<div class=\"turno_title\">Turno</div>\n    		<div class=\"turno_matutino\">Matutino</div>\n    		<div class=\"turno_vespertino\">Vespertino</div>\n    		<div class=\"turno_nocturno\">Nocturno</div>\n    		<div class=\"dondeQueresEstudiar_title\">¿Cuál es tu plan?</div>\n    		<input type=\"text\" class=\"dondeQueresEstudiar_text\" />\n    		<button ng-click=\"previous()\">Atrás</button>\n    		<button ng-click=\"next()\">Continuar</button>\n	    </ion-slide>\n	    <ion-slide>\n    		<div class=\"tuBusqueda_title\">Esta es tu búsqueda</div>\n    		<input type=\"text\" class=\"dondeQueresEstudiar_text\" value=\"16 años, Aguas Corrientes, Primaria, Nocturno\" />\n    		<button>Editar búsqueda</button>\n    		<button>Listado</button>\n    		<button ng-click=\"go_to_map()\">Mapa</button>\n    		<div class=\"listado_liceo_title\">Liceo Nº 1</div>\n    		<div class=\"listado_liceo_title\">Liceo Nº 12</div>\n    		<div class=\"listado_liceo_title\">Liceo Nº 135</div>\n	    </ion-slide>\n	  </ion-slide-box>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("templates/intro.html","<ion-view title=\"Intro\" hide-nav-bar=\"true\">\n  <ion-content scroll=\"false\">\n    <div class=\"intro_rombo_azul\"></div>\n    <div class=\"intro_rombo_amarillo\"></div>\n    <div class=\"intro_inside_rectangle\">\n      <div class=\"intro_que_buscas\">\n        ¿Qué estás buscando?\n      </div>\n      <div class=\"intro_informacion_sobre\">\n        información sobre\n      </div>\n      <div ng-click=\"go_to_form();\" class=\"intro_informacion_donde_button\">\n        dónde estudiar\n      </div>\n      <div class=\"intro_informacion_centro_button\">\n        mi centro de estudio\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("templates/log_in.html","<ion-modal-view class=\"new-report-modal\">\n    <ion-content direction=\"y\" class=\"new-report-scroll\">\n        <div class=\"new-report-slide\">\n          <div class=\"new-report-content\">\n            <div class=\"category-header\">\n              <h3>Ingresa tus datos si ya tienes cuenta en {{AppName}}:</h3>\n            </div>\n            <div class=\"list\">\n              <div class=\"text-input-header\">\n                <h3>Usuario *</h3>\n              </div>\n              <div class=\"text-input-container\">\n                <input style=\"color: #ffffff; padding-left: 10px; padding-right: 10px;\" class=\"text-input\" type=\"usuario\" placeholder=\"Tu nombre de usuario\" ng-model=\"nonauth.user\"/>\n              </div>\n              <div class=\"field-separator\"></div>\n              <div class=\"text-input-header\">\n                <h3>Contraseña *</h3>\n              </div>\n              <div class=\"text-input-container\">\n                <input class=\"text-input\" style=\"color: #ffffff; padding-left: 10px; padding-right: 10px; padding-top: 10px;\" placeholder=\"Tu contraseña\" type=\"password\" ng-model=\"nonauth.password\"/>\n              </div>\n              <div class=\"field-separator\"></div>\n              <div id=\"error_container\"></div>\n              <div class=\"padding\">\n                <button class=\"form-button\" ng-click=\"login_ok()\">Acceder</button>\n                <div class=\"field-separator\"></div>\n                <button class=\"form-button\" ng-click=\"close_login_modal()\">Cancelar</button>\n              </div>\n              <a ng-click=\"forgot_password()\" style=\"color: #FFFFFF; font-size: 12pt;\">¿Olvidaste tu contraseña?</a>\n            </div>\n          </div>\n        </div>\n    </ion-content>\n    <div id=\"spinner-inside-modal\" class=\"modal-spinner\"><h3>Aguarde por favor</h3><ion-spinner icon=\"spiral\"></ion-spinner><h3 id=\"sent_label\">Enviado: 100%</h3></div>\n</ion-modal-view>\n");
$templateCache.put("templates/map.html","<ion-view title=\"{{AppName}}-Map\" hide-nav-bar=\"true\">\n\n<ion-nav-title>\n</ion-nav-title>\n\n<div id=\"spinner\" class=\"intro-spinner\"><ion-spinner icon=\"spiral\"></ion-spinner></div>\n<div id=\"pinspinner\" class=\"intro-spinner\"><ion-spinner icon=\"spiral\"></ion-spinner></div>\n\n<!--<div class=\"top-bar-imm\">\n  <div class=\"white-bar-imm\"></div>\n  <div class=\"icon-imm-top\"/></div>\n</div>-->\n\n\n<ion-content data-tap-disabled=\"true\">\n  <leaflet defaults=\"map.defaults\" center=\"map.center\" markers=\"map.markers\" ng-if=\"map\"></leaflet>\n</ion-content>\n\n</ion-view>\n");
$templateCache.put("templates/menu.html","<ion-side-menus enable-menu-with-back-views=\"false\">\n  <ion-side-menu-content>\n    <ion-nav-bar class=\"bar-stable\">\n    </ion-nav-bar>\n    <ion-nav-view name=\"menuContent\"></ion-nav-view>\n  </ion-side-menu-content>\n</ion-side-menus>\n");
$templateCache.put("templates/sign_up.html","<ion-modal-view class=\"new-report-modal\">\n    <ion-content class=\"new-report-scroll\">\n        <div class=\"new-report-slide\">\n          <div class=\"new-report-content\">\n            <div class=\"category-header\">\n              <h3>Regístrate y se parte</h3>\n              <p>Crea una cuenta en {{AppName}} y accede a todas las herramientas.</p>\n            </div>\n            <div class=\"list\">\n              <div class=\"text-input-header\">\n                <h3>Correo electrónico *</h3>\n              </div>\n              <div class=\"text-input-container\">\n                <input style=\"color: #ffffff; padding-left: 10px; padding-right: 10px;\" class=\"text-input\" type=\"email\" placeholder=\"Proporcionar un correo válido\" ng-model=\"newuser.email\">\n              </div>\n              <div class=\"field-separator\"></div>\n              <div class=\"text-input-header\">\n                <h3>Usuario *</h3>\n              </div>\n              <div class=\"text-input-container\">\n                <input class=\"text-input\" style=\"color: #ffffff; padding-left: 10px; padding-right: 10px; padding-top: 10px;\" placeholder=\"Por favor, ingrese nombre de usuario\" ng-model=\"newuser.username\"/>\n              </div>\n              <div class=\"field-separator\"></div>\n              <div class=\"text-input-header\">\n                <h3>Contraseña *</h3>\n              </div>\n              <div class=\"text-input-container\">\n                <input class=\"text-input\" style=\"color: #ffffff; padding-left: 10px; padding-right: 10px; padding-top: 10px;\" placeholder=\"Proporcione una contraseña\" ng-model=\"newuser.password\" type=\"password\"/>\n              </div>\n              <div class=\"field-separator\"></div>\n                <div class=\"text-input-header\">\n                <h3>Repetir contraseña *</h3>\n              </div>\n              <div class=\"text-input-container\">\n                <input class=\"text-input\" style=\"color: #ffffff; padding-left: 10px; padding-right: 10px; padding-top: 10px;\" placeholder=\"Repite la contraseña\" ng-model=\"newuser.repassword\" type=\"password\"/>\n              </div>\n            <div class=\"field-separator\"></div>\n            <div class=\"foto-header\">\n                <h3>Si deseas, puedes subir tu foto</h3>\n              </div>\n              <div class=\"foto-input-container\" style=\"height: 50px;\">\n                <div class=\"foto-picker\">\n                  <div ng-click=\"addImage(0,0,0,1)\" class=\"foto-icon\"></div>\n                  <div ng-click=\"addImage(1,0,0,1)\" class=\"foto-text\">o GALERÍA</div>\n                </div>\n              </div>\n              <div class=\"field-separator\"></div>\n              <div class=\"foto-footer\">\n                <h3>El archivo no puede pesar más de 2MB. (JPG)</h3>\n              </div>\n              <div class=\"field-separator\"></div>\n              <div class=\"field-separator\"></div>\n              <div id=\"error_container\"></div>\n              <div class=\"padding\">\n                <button class=\"form-button\" ng-click=\"sign_up_ok()\">Registrarse</button>\n                <div class=\"field-separator\"></div>\n                <button class=\"form-button\" ng-click=\"close_sign_up_modal()\">Cancelar</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div style=\"height: 200px\"></div>\n    </ion-content>\n    <div id=\"spinner-inside-modal\" class=\"modal-spinner\"><h3>Aguarde por favor</h3><ion-spinner icon=\"spiral\"></ion-spinner><h3 id=\"sent_label\">Enviado: 100%</h3></div>\n</ion-modal-view>\n");
$templateCache.put("templates/sign_up_desktop.html","<ion-modal-view class=\"new-report-modal\">\n    <ion-content class=\"new-report-scroll\">\n        <div class=\"new-report-slide\">\n          <div class=\"new-report-content\">\n            <div class=\"category-header\">\n              <h3>Regístrate y se parte</h3>\n              <p>Crea una cuenta en {{AppName}} y accede a todas las herramientas.</p>\n            </div>\n            <div class=\"list\">\n              <div class=\"text-input-header\">\n                <h3>Correo electrónico *</h3>\n              </div>\n              <div class=\"text-input-container\">\n                <input style=\"color: #ffffff; padding-left: 10px; padding-right: 10px;\" class=\"text-input\" type=\"email\" placeholder=\"Proporcionar un correo válido\" ng-model=\"newuser.email\">\n              </div>\n              <div class=\"field-separator\"></div>\n              <div class=\"text-input-header\">\n                <h3>Usuario *</h3>\n              </div>\n              <div class=\"text-input-container\">\n                <input class=\"text-input\" style=\"color: #ffffff; padding-left: 10px; padding-right: 10px; padding-top: 10px;\" placeholder=\"Por favor, ingrese nombre de usuario\" ng-model=\"newuser.username\"/>\n              </div>\n              <div class=\"field-separator\"></div>\n              <div class=\"text-input-header\">\n                <h3>Contraseña *</h3>\n              </div>\n              <div class=\"text-input-container\">\n                <input class=\"text-input\" style=\"color: #ffffff; padding-left: 10px; padding-right: 10px; padding-top: 10px;\" placeholder=\"Proporcione una contraseña\" ng-model=\"newuser.password\" type=\"password\"/>\n              </div>\n              <div class=\"field-separator\"></div>\n                <div class=\"text-input-header\">\n                <h3>Repetir contraseña *</h3>\n              </div>\n              <div class=\"text-input-container\">\n                <input class=\"text-input\" style=\"color: #ffffff; padding-left: 10px; padding-right: 10px; padding-top: 10px;\" placeholder=\"Repite la contraseña\" ng-model=\"newuser.repassword\" type=\"password\"/>\n              </div>\n              <div class=\"field-separator\"></div>            \n            <div class=\"foto-header\">\n                <h3>Si deseas, puedes subir tu foto</h3>\n              </div>\n              <div class=\"foto-input-container\">\n                <input type=\"file\" id=\"upimgfile\" name=\"uploadfile\" onchange=\"angular.element(this).scope().readURL(this,1)\" ng-model=\"newuser.picture_url\">\n                <div class=\"preview-img\"> <img id=\"myImage\" width=\"150\"   size=\"30\" /> </div>\n              </div>\n              <div class=\"field-separator\"></div>\n              <div class=\"foto-footer\">\n                <h3>El archivo no puede pesar más de 2MB. (JPG)</h3>\n              </div>\n              <div class=\"field-separator\"></div>\n              <div class=\"field-separator\"></div>\n              <div id=\"error_container\"></div>\n              <div class=\"padding\">\n                <button class=\"form-button\" ng-click=\"sign_up_ok()\">Registrarse</button>\n                <div class=\"field-separator\"></div>\n                <button class=\"form-button\" ng-click=\"close_sign_up_modal()\">Cancelar</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div style=\"height: 200px\"></div>\n    </ion-content>\n    <div id=\"spinner-inside-modal\" class=\"modal-spinner\"><h3>Aguarde por favor</h3><ion-spinner icon=\"spiral\"></ion-spinner><h3 id=\"sent_label\">Enviado: 100%</h3></div>\n</ion-modal-view>\n");}]);