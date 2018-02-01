//META{"name":"Quicksave"}*//

/* global $, PluginUtilities, navigator, BdApi, PluginSettings */

class Quicksave {
	get local() {
		let lang = navigator.language;
		if (document.documentElement.getAttribute('lang')) 
			lang = document.documentElement.getAttribute('lang').split('-')[0];
		switch (lang) {
			case "es": // Spanish
				return {
					startMessage: "${pluginName} ${version} ha empezado",
					description: 'Le permite guardar imágenes rápidamente con un nombre corto y aleatorio',
					quicksave: "Guardar imagen",
					as: 'como',
					finished: 'Finalizado',
					showFn: "Imagen guardada como ${filename}",
					saveFail: "Hubo un problema al guardar la imagen.",
					invalidLocation: "Ubicación no válida",
					save: "Guardar",
					reset: "Reajustar configuraciones",
					downloading: 'Bajando...',
					noFreeName: 'Error: Ha fallado al encontrar un nombre libre',
					modals: {
						generalButtons: {
							cancel: 'Cancelar',
							save: 'Guardar'
						},
						filenameChoose: {
							insertFilename: 'Insira el nombre del archivo'
						},
						error: {
							alreadyExists: 'Archivo ${filename} ya existe',
							genRandom: 'Generar aleatorio',
							overwrite: 'Sustituir',
							chooseNew: 'Elegir nuevo nombre',
							question: '¿Qué vas a hacer?'
						}
					},
					settings: {
						panel: 'Panel de configuraciones',
						labels: {
							directory: 'Directorio',
							original: 'Mantener el nombre original',
							filename: 'Mostrar el nombre del archivo al finalzar',
							randomLength: 'Tamaño del nombre al azar'
						},
						help: {
							original: 'Guardar archivos con el nombre original en lugar de un aleatorio',
							filename: 'Si mostrar el nombre del archivo al finalizar o no'
						},
						protip: {
							label: 'Consejo:',
							tip: 'Los archivos guardados ganan un nombre al azar en Base64. Sólo 4 caracteres permiten ~ 17 millones de nombres (64^4)'
						}
					}
				};
			case "pt": // Portuguese
				return {
					startMessage: "${pluginName} ${version} iniciado",
					description: 'Permite salvar imagens rapidamente com um nome curto e aleatório',
					quicksave: "Salvar imagem",
					as: 'como',
					finished: 'Finalizado',
					filename: "Imagem salva como ${filename}",
					saveFail: "Houve um problema ao salvar a imagem",
					invalidLocation: "Local inválido",
					save: "Salvar",
					reset: "Redefinir configurações",
					downloading: 'Baixando...',
					noFreeName: 'Erro: Falha ao encontrar um nome disponível',
					modals: {
						generalButtons: {
							cancel: 'Cancelar',
							save: 'Salvar'
						},
						filenameChoose: {
							insertFilename: 'Insira o nome do arquivo'
						},
						error: {
							alreadyExists: 'Arquivo ${filename} já existe',
							genRandom: 'Gerar aleatório',
							overwrite: 'Substituir',
							chooseNew: 'Escolher novo nome',
							question: 'O que você deseja fazer?'
						}
					},
					settings: {
						panel: 'Painel de configurações',
						labels: {
							directory: 'Diretório',
							original: 'Manter o nome original',
							filename: 'Mostrar nome do arquivo ao terminar de baixar',
							randomLength: 'Tamanho do nome aleatório',
							autoAddNum: 'Adicionar (n) ao final dos arquivos automaticamente'
						},
						help: {
							original: 'Salvar arquivos com o nome original em vez de um aleatório',
							filename: 'Mostrar o nome do arquivo ao finalizar ou não',
							autoAddNum: 'Ao salvar um arquivo com um nome já existente, adicionar (n) ao final do nome'
						},
						protip: {
							label: 'Fica a dica:',
							tip: 'Arquivos salvos ganham um nome aleatório em Base64. Só 4 caracteres permitem ~17 milhões de nomes (64^4)'
						}
					}
				};
			default: // English
				return {
					startMessage: "${pluginName} ${version} has started.",
					description: 'Lets you save images fast with a short random name',
					quicksave: "Save image",
					as: 'as',
					finished: 'Finished',
					filename: "Image saved as ${filename}",
					saveFail: "There was an issue saving the image.",
					invalidLocation: "Invalid location",
					save: "Save",
					reset: "Reset settings",
					downloading: 'Downloading...',
					noFreeName: 'Error: Failed to find a free file name',
					modals: {
						generalButtons: {
							cancel: 'Cancel',
							save: 'Save'
						},
						filenameChoose: {
							insertFilename: 'Insert file name'
						},
						error: {
							alreadyExists: 'File ${filename} already exists',
							genRandom: 'Generate random',
							overwrite: 'Overwrite',
							chooseNew: 'Choose new name',
							question: 'Whatcha gonna do?'
						}
					},
					settings: {
						panel: 'Settings panel',
						labels: {
							directory: 'Directory',
							original: 'Keep original name',
							filename: 'Show file name when finished downloading',
							randomLength: 'Random file name length'
						},
						help: {
							original: 'Save files with original file name instead of new random one',
							filename: 'Whether to show file name on ending or not'
						},
						protip: {
							label: 'Protip:',
							tip: 'Saved files get a random base64 name. Only 4 chars allow ~17 million different file names (64^4).'
						}
					}
				};
		}
	}
	getAuthor     () { return "Nirewen"             }
	getName       () { return "Quicksave"           }
	getDescription() { return this.local.description}
	getVersion    () { return "0.2.0"               }
	start         () {
		let self = this;
		$('#zeresLibraryScript').remove();
		$('head').append($("<script type='text/javascript' id='zeresLibraryScript' src='https://rauenzi.github.io/BetterDiscordAddons/Plugins/PluginLibrary.js'>"));
		
		if (typeof window.ZeresLibrary !== "undefined") 
			this.initialize();
		else 
			$('#zeresLibraryScript').on("load", () => self.initialize());
	}
	initialize() {
		BdApi.injectCSS(this.getName(), this.css.modals);
		PluginUtilities.checkForUpdate(this.getName(), this.getVersion(), "https://raw.githubusercontent.com/nirewen/Quicksave/master/Quicksave.plugin.js");
		PluginUtilities.showToast(PluginUtilities.formatString(this.local.startMessage, {pluginName: this.getName(), version: this.getVersion()}));
		this.initialized = true;
		this.loadSettings();
	}
	stop  () {
		BdApi.clearCSS(this.getName());
		this.initialized = false;
	}
	load  () {BdApi.injectCSS(`${this.getName()}-inputs`, this.css.input)}
	unload() {BdApi.clearCSS(`${this.getName()}-inputs`)}
	accessSync(dir) {
		let fs = require('fs');
		try {
			fs.accessSync(dir, fs.F_OK);
			return true;
		} catch (e) {
			return false;
		}
	}
	
	closeModal(modal) {
		modal.addClass('closing');
		setTimeout(() => modal.remove(), 100);
	}
	
	openModal(modal, type, url) {
		if (document.querySelector('.app-XZYfmp')) 
			$('.app-XZYfmp').siblings('[class*="theme-"]:not(.popouts)').first().append(modal);
		this.bindEvents(modal, type, url);
	}
	
	bindEvents(modal, type, url) {
		let self = this;
		switch (type) {
			case 'filenameChoose': {
				let filetype = '.' + url.split('.').slice(-1)[0].split('?')[0];
					
				modal.find('.hint').html(filetype);
				modal.find('.footer .button').click(e => self.closeModal(modal));
				modal.find('.footer .button-primary').click(e => self.saveCurrentImage(url, modal.find('.filename').val()));
				modal.find('.filename')
					.on("input", e => modal.find('.hint').html(modal.find('.filename').val() + filetype))
					.on("keyup", e => {
						let code = e.keyCode || e.which;
						if (code == 13) {
							e.preventDefault();
							self.saveCurrentImage(url, modal.find('.filename').val());
							self.closeModal(modal);
						}
					})
					.focus();
			}
			case 'error': {
				modal.find('button.cancel').click(e => self.closeModal(modal));
				modal.find('button.overwrite').click(e => self.saveCurrentImage(url, null, true));
				modal.find('button.gen-random').click(e => self.saveCurrentImage(url));
				modal.find('button.choose-new').click(e => self.openModal($(PluginUtilities.formatString(self.modals.name, {
					insertFilename: this.local.modals.filenameChoose.insertFilename, 
					cancel: this.local.modals.generalButtons.cancel, 
					save: this.local.modals.generalButtons.save
				})), 'filenameChoose', url));
				modal.find('.button').click(e => self.closeModal(modal));
			}
		}
	}

	observer(e) {
    if (!e.addedNodes.length || e.addedNodes.length == 0 || !(e.addedNodes[0] instanceof Element) || !this.initialized) return;
    
		let fs   = require('fs'),
        elem = $(e.addedNodes[0]),
			  self = this;
    
		if (elem.hasClass('backdrop-2ohBEd')) {
			let elem = $('.modal-2LIEKY .downloadLink-wANcd8');
			if (!elem) return;
			
			fs.access(this.settings.directory, fs.W_OK, err => {
				let button = $('<a id="qs_button" class="downloadLink-wANcd8 size14-1wjlWP weightMedium-13x9Y8"></a>');
				if (err)
					button.html(this.local.invalidLocation);
				else {
					button.html(this.local.quicksave);
					$(document).on("keydown.qs", e => {
						if (e.shiftKey)
							button.html(`${this.local.quicksave} ${this.local.as}...`);
					}).on('keyup.qs', e => button.html(this.local.quicksave));
					button.click(e => {
						$(document).off('keydown.qs').off('keyup.qs');
						button.html(self.local.quicksave);
						if (e.shiftKey)
							self.openModal($(PluginUtilities.formatString(self.modals.name, {
								insertFilename: this.local.modals.filenameChoose.insertFilename,
								cancel: this.local.modals.generalButtons.cancel, 
								save: this.local.modals.generalButtons.save
							})), 'filenameChoose', $('.modal-2LIEKY .inner-1_1f7b .imageWrapper-38T7d9')[0].childNodes[0].attributes[0].nodeValue);
						else
							self.saveCurrentImage($('.modal-2LIEKY .inner-1_1f7b .imageWrapper-38T7d9')[0].childNodes[0].attributes[0].nodeValue);
					});
				}	
				elem.after($('<span class="downloadLink-wANcd8 size14-1wjlWP weightMedium-13x9Y8"> • </span>'), button);
			});
		}
    
    if (elem.hasClass('contextMenu-uoJTbz')) {
      let link = ReactUtilities.getReactProperty(elem[0], "return.memoizedProps.attachment.url"),
          item = "";
      
      if (/(.png|.jpg|.jpeg)$/i.test(link)) {
          item = $(`<div class="item-1XYaYf qs-item"><span>${this.local.quicksave}</span><div class="hint-3TJykr"></div></div>`);
          $(document)
            .on("keydown.qs", e => {
              if (e.shiftKey)
                item.find('span').html(`${this.local.quicksave} ${this.local.as}...`);
            })
            .on('keyup.qs', e => button.html(this.local.quicksave));
            
          item.click(e => {
              $(document).off('keydown.qs').off('keyup.qs');
              item.find('span').html(self.local.quicksave);
              if (e.shiftKey) {
                $(elem[0]).hide();
                self.openModal($(PluginUtilities.formatString(self.modals.name, {
                  insertFilename: this.local.modals.filenameChoose.insertFilename,
                  cancel: this.local.modals.generalButtons.cancel, 
                  save: this.local.modals.generalButtons.save
                })), 'filenameChoose', link);
              } else
                self.saveCurrentImage(link);
            });
          $(elem[0]).prepend(item);
      } else {
        link = ReactUtilities.getReactProperty(elem[0], "return.memoizedProps.src");
        if (!link) return;
        link = link.match(/https?\/.*(\.png|\.jpg|\.jpeg)\??/g);
        if (link) return;
        link = link[0].replace("http/", "http://").replace("https/", "https://").replace('?', '');
        
        if (/(.png|.jpg|.jpeg)$/i.test(link)) {
          item = $(`<div class="item-1XYaYf qs-item"><span>${this.local.quicksave}</span><div class="hint-3TJykr"></div></div>`);
          $(document)
            .on("keydown.qs", e => {
              if (e.shiftKey)
                item.find('span').html(`${this.local.quicksave} ${this.local.as}...`);
            })
            .on('keyup.qs', e => button.html(this.local.quicksave));
          item
            .on("click.qs", () => {
              $(document).off('keydown.qs').off('keyup.qs');
              item.find('span').html(self.local.quicksave);
              if (e.shiftKey) {
                $(elem[0]).hide();
                self.openModal($(PluginUtilities.formatString(self.modals.name, {
                  insertFilename: this.local.modals.filenameChoose.insertFilename,
                  cancel: this.local.modals.generalButtons.cancel, 
                  save: this.local.modals.generalButtons.save
                })), 'filenameChoose', link);
              } else
                self.saveCurrentImage(link);
            });
          $(elem[0]).prepend(item);
        }
      }
    }
	}
	saveSettings() {
		PluginUtilities.saveSettings(this.getName(), this.settings);
	}

	loadSettings() {
		this.settings = PluginUtilities.loadSettings(this.getName(), this.defaultSettings);
	}
	
	getSettingsPanel() {
		let panel = $("<form>").addClass("form").css("width", "100%");
		if (this.initialized) this.generateSettings(panel);
		return panel[0];
	}
	generateSettings(panel) {
		new PluginSettings.ControlGroup(this.local.settings.panel, () => this.saveSettings(), {shown: true}).appendTo(panel).append(
			new PluginSettings.Textbox(this.local.settings.labels.directory, '', this.settings.directory, 'none', text => {
				text.endsWith('/') 
					? this.settings.directory = text
					: this.settings.directory = text + '/';
			}, {
				width: '400px',
				class: 'quicksave input'
			}), 
			new PluginSettings.Checkbox(this.local.settings.labels.original, this.local.settings.help.original, this.settings.norandom, checked => {
				this.settings.norandom = checked;
			}), 
			new PluginSettings.Checkbox(this.local.settings.labels.filename, this.local.settings.help.filename, this.settings.showfn, checked => {
				this.settings.showfn = checked;
			}), 
			new PluginSettings.SettingField(this.local.settings.labels.randomLength, '', {type: 'number', value: `${this.settings.fnLength}`, class: 'quicksave input', min: '1'}, number => {
				this.settings.fnLength = number;
			}),
			new PluginSettings.Checkbox(this.local.settings.labels.autoAddNum, this.local.settings.help.autoAddNum, this.settings.addnum, checked => {
				this.settings.addnum = checked;
			}),
			$(`<div class='protip-12obwm inline-XIL6yQ'>
				<div class='pro-1IhGKk small-3-03j1 size12-1IGJl9 height16-1qXrGy statusGreen-1ADNRt weightBold-2qbcng'>${this.local.settings.protip.label}</div>
				<div class='tip-1Hs8ce primary-2giqSn'>${this.local.settings.protip.tip}</div>
			</div>`),
			$(`<button type="button" class="buttonRedFilledDefault-1TrZ9q buttonFilledDefault-AELjWf buttonDefault-2OLW-v button-2t3of8 buttonFilled-29g7b5 buttonRedFilled-1NjJNj mediumGrow-uovsMu" style='margin: 10px 0; float: right;'>${this.local.reset}</button>`)
				.click(() => {
					this.settings = this.defaultSettings;
					this.saveSettings();
					panel.empty();
					this.generateSettings(panel);
				})
		);
	}
	
	addNumber(filename, type, i = 0) {
		let temp = filename + (i > 0 ? ` (${i})` : '');
		if (this.accessSync(this.settings.directory + temp + type))
			return this.addNumber(filename, type, ++i);
		return temp;
	}

	randomFilename64(length) {
		let name = '';
		while(length--)
			name += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-'[(Math.random() * 64 | 0)];
		return name;
	}

	saveCurrentImage(url, filename, overwrite = false) {
		let button = $('#qs_button'),
			  fs     = require('fs'),
			  dir    = this.settings.directory,
			  net    = (url.split('//')[0] == 'https:') ? require('https') : require('http');
		
		if (/:large$/.test(url))
			url = url.replace(/:large$/, '');
		
		if (!filename && this.settings.norandom)
			filename = url.split('/').slice(-1)[0].split('?')[0].split('.')[0];
		
		if (!filename && !overwrite && !this.settings.addnum) 
			filename = this.randomFilename64(this.settings.fnLength);

		let filetype  = '.' + url.split('.').slice(-1)[0].split('?')[0],
			tries = 50;
		
		if (this.settings.addnum)
			filename = this.addNumber(filename, filetype);
		
		if (this.accessSync(dir + filename + filetype) && !overwrite && !this.settings.addnum) {
			return this.openModal($(PluginUtilities.formatString(this.modals.error, {
				alreadyExists: PluginUtilities.formatString(this.local.modals.error.alreadyExists, {filename: filename + filetype}),
				question: this.local.modals.error.question,
				cancel: this.local.modals.generalButtons.cancel,
				chooseNew: this.local.modals.error.chooseNew,
				overwrite: this.local.modals.error.overwrite,
				genRandom: this.local.modals.error.genRandom
			})), 'error', url);
		}
		
		button.html(this.local.downloading);
		
		while (this.accessSync(dir + filename + filetype) && tries-- && !overwrite && !this.settings.addnum && !this.settings.norandom)
			filename = this.randomFilename64(this.settings.fnLength);
		
		if (tries == -1)
			return PluginUtilities.showToast(this.local.noFreeName, {type: 'error'});
		
		filename += filetype;

		let dest = dir + filename,
			file = fs.createWriteStream(dest),
			self = this;
			
		net.get(url, res => {
			res.pipe(file);
			file.on('finish', () => {
				button.html(self.local.quicksave);
				PluginUtilities.showToast(self.local.finished, {type: 'success'});
				if (self.settings.showfn)
					PluginUtilities.showToast(PluginUtilities.formatString(self.local.filename, {filename}), {type: 'info'});
				file.close();
			});
		}).on('error', err => {
			fs.unlink(dest); 
			PluginUtilities.showToast(err.message, {type: 'error'});
			file.close();
		});
		
	}
	get defaultSettings() {
		return {
			directory: 'none',
			norandom: false,
			fnLength: 4,
			showfn: true,
			addnum: false
		};
	}
	get modals() {
		return {
			name: "<div id='quicksave-modal-wrapper'>" +
					"<div class='callout-backdrop backdrop-2ohBEd'></div>" +
					"<div class='modal-2LIEKY' style='opacity: 1; transform: scale(1) translateZ(0px);'>" +
						"<div class='modal-body inner-1_1f7b'>" +
							"<div class='comment'>" +
								"<div class='label'>" +
									"<span>${insertFilename}:</span>" +
								"</div>" +
								"<div class='inner'>" +
									"<input class='filename' maxlength='50'>" +
									"<div class='hint'></div>" +
								"</div>" +
							"</div>" +
							"<div class='footer'>" +
								"<button type='button' class='button cancel'>" +
									"<span>${cancel}</span>" +
								"</button>" +
								"<button type='button' class='button button-primary save'>" +
									"<span>${save}</span>" +
								"</button>" +
							"</div>" +
						"</div>" +
					"</div>" +
				"</div>",
			error: '<div id="quicksave-modal-wrapper">' +
					'<div class="callout-backdrop backdrop-2ohBEd"></div>' +
					'<div class="modal-2LIEKY" style="opacity: 1; transform: scale(1) translateZ(0px);">' +
						'<div class="inner-1_1f7b">' +
							'<form class="modal-3HOjGZ container-2hX5wK">' +
								'<div class="flex-lFgbSz flex-3B1Tl4 horizontal-2BEEBe horizontal-2VE-Fw flex-3B1Tl4 directionRow-yNbSvJ justifyStart-2yIZo0 alignCenter-3VxkQP noWrap-v6g9vO header-3sp3cE" style="flex: 0 0 auto;">' +
									'<h4 class="h4-2IXpeI title-1pmpPr size16-3IvaX_ height20-165WbF weightSemiBold-T8sxWH defaultColor-v22dK1 header-JzU4_V">' +
										'${alreadyExists}</h4>' +
								'</div>' +
								'<div class="scrollerWrap-2uBjct content-1Cut5s scrollerThemed-19vinI themeGhostHairline-2H8SiW">' +
									'<div class="scroller-fzNley inner-tqJwAU content-1a0qkZ">' +
										'<div class="spacing-CsDO_x marginBottom20-2Ifj-2 medium-2KnC-N size16-3IvaX_ height20-165WbF primary-2giqSn">' +
											'${question}</div>' +
									'</div>' +
								'</div>' +
								'<div class="flex-lFgbSz flex-3B1Tl4 horizontalReverse-2LanvO horizontalReverse-k5PqxT flex-3B1Tl4 directionRowReverse-2eZTxP justifyStart-2yIZo0 alignStretch-1hwxMa noWrap-v6g9vO footer-1PYmcw" style="flex: 0 0 auto;">' +
									'<button type="button" class="button choose-new">' +
										'<div class="contentsDefault-nt2Ym5 contents-4L4hQM contentsFilled-3M8HCx contents-4L4hQM">${chooseNew}</div>' +
									'</button>' +
									'<button type="button" class="button gen-random">' +
										'<div class="contentsDefault-nt2Ym5 contents-4L4hQM contentsFilled-3M8HCx contents-4L4hQM">${genRandom}</div>' +
									'</button>' +
									'<button type="button" class="button red overwrite">' +
										'<div class="contentsDefault-nt2Ym5 contents-4L4hQM contentsFilled-3M8HCx contents-4L4hQM">${overwrite}</div>' +
									'</button>' +
									'<button type="button" class="buttonPrimaryLinkDefault-1PQflF buttonLinkDefault-3J8pja buttonDefault-2OLW-v button-2t3of8 mediumGrow-uovsMu cancel">' +
										'<div class="contentsDefault-nt2Ym5 contents-4L4hQM contentsLink-2ScJ_P contents-4L4hQM">${cancel}</div>' +
									'</button>' +
								'</div>' +
							'</form>' +
						'</div>' +
					'</div>' +
				'</div>'
		};
	}
	get css() {
		return {
			modals: `
				@keyframes quicksave-modal-wrapper {
					to { transform: scale(1); opacity: 1; }
				}
				@keyframes quicksave-modal-wrapper-closing {
					to { transform: scale(0.7); opacity: 0; }
				}
				@keyframes quicksave-backdrop {
					to { opacity: 0.85; }
				}
				@keyframes quicksave-backdrop-closing {
					to { opacity: 0; }
				}
				#quicksave-modal-wrapper .callout-backdrop {
					animation: quicksave-backdrop 250ms ease;
					animation-fill-mode: forwards;
					opacity: 0;
					background-color: rgb(0, 0, 0);
					transform: translateZ(0px);
				}

				#quicksave-modal-wrapper.closing .callout-backdrop {
					animation: quicksave-backdrop-closing 100ms linear;
					animation-fill-mode: forwards;
					animation-delay: 50ms;
					opacity: 0.85;
				}

				#quicksave-modal-wrapper.closing .modal-body,
				#quicksave-modal-wrapper.closing .container-2hX5wK {
					animation: quicksave-modal-wrapper-closing 100ms cubic-bezier(0.19, 1, 0.22, 1);
					animation-fill-mode: forwards;
					opacity: 1;
					transform: scale(1);
				}
				#quicksave-modal-wrapper .label {
					font-size: 12px;
					font-weight: 500;
					text-transform: uppercase;
				}
				#quicksave-modal-wrapper .hint {
					background-color: transparent;
					color: #dadddf;
					left: 16px;
					line-height: 52px;
					position: absolute;
					top: 0;
				}
				#quicksave-modal-wrapper .comment {
					margin: 15px 18px 10px 18px;
				}
				#quicksave-modal-wrapper .filename {
					-webkit-box-flex: 1;
					background-color: transparent;
					border: none;
					color: #fff;
					flex: 1;
					line-height: 52px;
					margin-right: 16px;
					padding: 0;
					z-index: 1;
				}
				#quicksave-modal-wrapper .filename:focus {
					outline: none;
				}
				#quicksave-modal-wrapper .inner, 
				#quicksave-modal-wrapper .hint,
				#quicksave-modal-wrapper .filename {
					font-family: Whitney,Helvetica Neue,Helvetica,Arial,sans-serif;
					font-size: 14px;
					font-weight: 300;
					letter-spacing: .04em;
					white-space: pre;
				}
				#quicksave-modal-wrapper .inner {
					-webkit-box-align: center;
					-webkit-box-direction: normal;
					-webkit-box-orient: horizontal;
					align-items: center;
					border: 1px solid rgba(0,0,0,.2);
					background-color: rgba(36,39,43,.2);
					border-radius: 3px;
					display: flex;
					flex-direction: row;
					height: 52px;
					margin: 13px 0;
					padding: 0 16px;
					position: relative;
				}
				#quicksave-modal-wrapper .footer {
					-webkit-box-direction: normal;
					-webkit-box-orient: horizontal;
					-webkit-box-pack: end;
					background-color: #5b6dae;
					border-radius: 0 0 5px 5px;
					display: -webkit-box;
					display: -ms-flexbox;
					display: flex;
					flex-direction: row;
					justify-content: flex-end;
					padding: 10px;
				}
				#quicksave-modal-wrapper .button {
					margin: 0 3px;
					background-color: #5b6dae;
					height: 36px;
					min-width: 84px;
					padding: 3px !important;
				}
				#quicksave-modal-wrapper .button.red {
					background-color: #f04747;
				}
				#quicksave-modal-wrapper .button-primary {
					background-color: #fff;
					color: #5b6dae;
					transition: opacity .2s ease-in-out;
				}
				#quicksave-modal-wrapper .modal-body,
				#quicksave-modal-wrapper .container-2hX5wK {
					animation: quicksave-modal-wrapper 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
					animation-fill-mode: forwards;
					transform: scale(0.7);
					transform-origin: 50% 50%;
				}
				#quicksave-modal-wrapper .modal-body {
					color: #fff;
					margin: 0;
					opacity: 0;
					-webkit-box-direction: normal;
					-webkit-box-orient: vertical;
					-webkit-filter: blur(0);
					-webkit-perspective: 1000;
					background-color: #7289da;
					border-radius: 5px;
					display: -webkit-box;
					display: -ms-flexbox;
					display: flex;
					filter: blur(0);
					flex-direction: column;
					width: 520px;
				}`,
			input: `
				.quicksave.input {
					-webkit-box-flex: 1;
					background-color: transparent;
					border: none;
					color: #fff;
					flex: 1;
					line-height: 52px;
					padding: 0;
					z-index: 1;
					-webkit-box-align: center;
					-webkit-box-direction: normal;
					-webkit-box-orient: horizontal;
					align-items: center;
					border: 1px solid rgba(0,0,0,.2);
					background-color: rgba(0,0,0,0.3);
					border-radius: 3px;
					display: flex;
					flex-direction: row;
					height: 40px;
					padding: 0 16px;
					position: relative;
				}`
		};
	}
}