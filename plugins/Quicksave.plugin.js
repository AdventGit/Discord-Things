//META{"name":"Quicksave"}*//

/* global $, ReactUtilities, PluginUtilities, PluginSettings, navigator, BdApi */

class Quicksave {
    get local() {
        let lang = navigator.language;
        if (document.documentElement.getAttribute('lang'))
            lang = document.documentElement.getAttribute('lang').split('-')[0];
        switch (lang) {
            case "es": // Spanish
                return {
                    startMessage: "${pluginName} ${version} ha empezado",
                    description: 'Le permite guardar archivos rápidamente con un nombre corto y aleatorio',
                    quicksave: "Guardar archivo",
                    as: 'como',
                    finished: 'Finalizado',
                    showFn: "Archivo guardado como ${filename}",
                    saveFail: "Hubo un problema al guardar el archivo.",
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
                            alreadyExists: 'Archivo <span class="file-name">${filename}</span>${filetype} ya existe',
                            genRandom: 'Generar aleatorio',
                            overwrite: 'Sustituir',
                            chooseNew: 'Elegir nuevo nombre',
                            question: '¿Qué vas a hacer?',
                            invalidUrl: 'URL no válida'
                        }
                    },
                    settings: {
                        panel: 'Panel de configuraciones',
                        labels: {
                            directory: 'Directorio',
                            original: 'Mantener el nombre original',
                            randomizeUnknown: 'Reemplazar nombres de archivo desconocidos',
                            filename: 'Mostrar el nombre del archivo al finalzar',
                            randomLength: 'Tamaño del nombre al azar'
                        },
                        help: {
                            original: 'Guardar archivos con el nombre original en lugar de un aleatorio',
                            randomizeUnknown: 'Al guardar los nombres de archivos originales, aleatorizar si el nombre de archivo es "unknown".',
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
                    description: 'Permite salvar arquivos rapidamente com um nome curto e aleatório',
                    quicksave: "Salvar arquivo",
                    as: 'como',
                    finished: 'Finalizado',
                    filename: "Arquivo salvo como ${filename}",
                    saveFail: "Houve um problema ao salvar o arquivo",
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
                            alreadyExists: 'Arquivo <span class="file-name">${filename}</span>${filetype} já existe',
                            genRandom: 'Gerar aleatório',
                            overwrite: 'Substituir',
                            chooseNew: 'Escolher novo nome',
                            question: 'O que você deseja fazer?',
                            invalidUrl: 'URL inválido'
                        }
                    },
                    settings: {
                        panel: 'Painel de configurações',
                        labels: {
                            directory: 'Diretório',
                            original: 'Manter o nome original',
                            randomizeUnknown: 'Substituir nomes de arquivo desconhecidos',
                            filename: 'Mostrar nome do arquivo ao terminar de baixar',
                            randomLength: 'Tamanho do nome aleatório',
                            autoAddNum: 'Adicionar (n) ao final dos arquivos automaticamente'
                        },
                        help: {
                            original: 'Salvar arquivos com o nome original em vez de um aleatório',
                            randomizeUnknown: 'Ao manter os nomes de arquivos originais, Randomize se o nome do arquivo for "unknown".',
                            filename: 'Mostrar o nome do arquivo ao finalizar ou não',
                            autoAddNum: 'Ao salvar um arquivo com um nome já existente, adicionar (n) ao final do nome'
                        },
                        protip: {
                            label: 'Fica a dica:',
                            tip: 'Arquivos salvos ganham um nome aleatório em Base64. Só 4 caracteres permitem ~17 milhões de nomes (64^4)'
                        }
                    }
                };
            case "tr": // Turkish
                return {
                    startMessage: "${pluginName} ${version} başladı.",
                    description: 'Dosyaları kısa bir rastgele adla hızlıca kaydetmenizi sağlar',
                    quicksave: "Dosyayı kaydet",
                    as: 'olarak',
                    finished: 'Tamamlandı',
                    filename: "Dosya ${filename} olarak kaydedildi.",
                    saveFail: "Dosya kaydedilirken bir sorun oluştu.",
                    invalidLocation: "Geçersiz konum",
                    save: "Kaydet",
                    reset: "Ayarları sıfırla",
                    downloading: 'İndiriliyor...',
                    noFreeName: 'Hata: Failed to find a free file name',
                    modals: {
                        generalButtons: {
                            cancel: 'İptal',
                            save: 'Kaydet'
                        },
                        filenameChoose: {
                            insertFilename: 'Dosya adını ekle'
                        },
                        error: {
                            alreadyExists: 'Dosya <span class="file-name">${filename}</span>${filetype} zaten var',
                            genRandom: 'Rastgele oluştur',
                            overwrite: 'Üzerine Yaz (Overwrite)',
                            chooseNew: 'Yeni isim seç',
                            question: 'Ne yapacaksın??',
                            invalidUrl: 'Geçersiz URL'
                        }
                    },
                    settings: {
                        panel: 'Ayar paneli',
                        labels: {
                            directory: 'Konum',
                            original: 'Orijinal ismi koru',
                            randomizeUnknown: 'Bilinmeyen dosya isimlerini değiştir',
                            filename: 'İndirme işlemi bittiğinde dosya adını göster',
                            randomLength: 'Rastgele dosya adı uzunluğu',
                            autoAddNum: 'Dosya adlarının sonuna otomatik olarak (n) ekle'
                        },
                        help: {
                            original: 'Dosyaları yeni rastgele biri yerine orijinal dosya adıyla kaydedin',
                            randomizeUnknown: 'Orijinal dosya isimlerini saklarken, dosya adı "unknown" ise rastgele hale getirin.',
                            filename: 'İndirmenin sonunda dosya adının gösterilip gösterilmeyeceği',
                            autoAddNum: 'Bir dosyayı aynı ada sahip bir dosyaya kaydederken, dosya adının sonuna (n) ekleyin.'
                        },
                        protip: {
                            label: 'Protip:',
                            tip: 'Kayıtlı dosyalar rasgetle bir base64 adı alır. Sadece 4 karakter, ~17 milyon farklı dosya adına izin verir (64 ^ 4).'
                        }
                    }
                };
            case "it": // Italian
				return {
					startMessage: "${pluginName} ${version} avviato.",
					description: 'Permette di salvare velocemente le immagini con un nome breve casuale',
					quicksave: "Salva immagine",
					as: 'come',
					finished: 'Fatto',
					filename: "Immagine salvata come ${filename}",
					saveFail: "Si è verificato un problema durante il salvataggio.",
					invalidLocation: "Percorso non valido",
					save: "Salva",
					reset: "Reimposta opzioni",
					downloading: 'Download in corso...',
					noFreeName: 'Errore: Non è stato possibile trovare un nome utilizzabile per il file',
					modals: {
						generalButtons: {
							cancel: 'Annulla',
							save: 'Salva'
						},
						filenameChoose: {
							insertFilename: 'Inserisci il nome del file'
						},
						error: {
							alreadyExists: 'Il file <span class="file-name">${filename}</span> esiste già',
							genRandom: 'Genera casualmente',
							overwrite: 'Sovrascrivi',
							chooseNew: 'Scegli un nuovo nome',
                            question: 'Cosa vuoi fare?',
                            invalidUrl: 'Invalid URL'
						}
					},
					settings: {
						panel: 'Pannello di configurazione',
						labels: {
							directory: 'Percorso',
							original: 'Mantieni il nome originale',
                            randomizeUnknown: 'Replace unknown filenames',
                            filename: 'Mostra il nome del file una volta completato il download',
                            randomLength: 'Lunghezza nome del file casuale',
                            autoAddNum: 'Add (n) at the end of the file names automatically'
						},
						help: {
							original: 'Salva il file con il suo nome originale invece di generarne uno casuale',
                            randomizeUnknown: 'When keeping original file names, randomize if the file name is "unknown".',
                            filename: 'Se mostrare il nome del file alla fine oppure no',
                            autoAddNum: 'When saving a file with the same name of another, add (n) to the end of the file name.'
						},
						protip: {
							label: 'Suggerimento:',
							tip: 'I file vengono salvati con un nome base64. Solo 4 caratteri possono avere ~17 milioni di combinazioni differenti (64^4).'
						}
					}
				};
            default: // English
                return {
                    startMessage: "${pluginName} ${version} has started.",
                    description: 'Lets you save files fast with a short random name',
                    quicksave: "Save file",
                    as: 'as',
                    finished: 'Finished',
                    filename: "File saved as ${filename}",
                    saveFail: "There was an issue saving the file.",
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
                            alreadyExists: 'File <span class="file-name">${filename}</span>${filetype} already exists',
                            genRandom: 'Generate random',
                            overwrite: 'Overwrite',
                            chooseNew: 'Choose new name',
                            question: 'What will you do?',
                            invalidUrl: 'Invalid URL'
                        }
                    },
                    settings: {
                        panel: 'Settings panel',
                        labels: {
                            directory: 'Directory',
                            original: 'Keep original name',
                            randomizeUnknown: 'Replace unknown filenames',
                            filename: 'Show file name when finished downloading',
                            randomLength: 'Random file name length',
                            autoAddNum: 'Add (n) at the end of the file names automatically'
                        },
                        help: {
                            original: 'Save files with original file name instead of new random one',
                            randomizeUnknown: 'When keeping original file names, randomize if the file name is "unknown".',
                            filename: 'Whether to show file name on ending or not',
                            autoAddNum: 'When saving a file with the same name of another, add (n) to the end of the file name.'
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
    getVersion    () { return "0.3.0"               }
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
        BdApi.injectCSS(`${this.getName()}-style`, this.css.thumb);
        PluginUtilities.checkForUpdate(this.getName(), this.getVersion(), "https://raw.githubusercontent.com/nirewen/Quicksave/master/Quicksave.plugin.js");
        PluginUtilities.showToast(PluginUtilities.formatString(this.local.startMessage, {pluginName: this.getName(), version: this.getVersion()}));
        this.initialized = true;
        this.loadSettings();
        this.injectThumbIcons();
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
        $('#app-mount').find('[class*=theme-]').last().append(modal);
        this.bindEvents(modal, type, url);
    }

    bindEvents(modal, type, url) {
        let self = this;
        switch (type) {
            case 'filenameChoose': {
                let filetype = '.' + url.split('.').slice(-1)[0].split('?')[0];

                modal.find('.hint').html(filetype);
                modal.find('.footer .button').click(e => self.closeModal(modal));
                modal.find('.footer .button-primary').click(e => self.saveCurrentFile(url, modal.find('.filename').val()));
                modal.find('.filename')
                    .on("input", e => modal.find('.hint').html(modal.find('.filename').val() + filetype))
                    .on("keyup", e => {
                        let code = e.keyCode || e.which;
                        if (code == 13) {
                            e.preventDefault();
                            self.saveCurrentFile(url, modal.find('.filename').val());
                            self.closeModal(modal);
                        }
                    })
                    .focus();
            }
            case 'error': {
                modal.find('button.cancel').click(e => self.closeModal(modal));
                modal.find('button.overwrite').click(e => self.saveCurrentFile(url, modal.find('.already_exists .file-name').text(), true));
                modal.find('button.gen-random').click(e => self.saveCurrentFile(url, this.randomFilename64(this.settings.fnLength)));
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

        if (elem.hasClass('backdrop-1wrmKB')) {
            let elem = $('.modal-1UGdnR .downloadLink-1ywL9o');
            if (!elem) return;
            elem = elem.first();

            fs.access(this.settings.directory, fs.W_OK, err => {
                let button = $('<a id="qs_button" class="anchor-3Z-8Bb downloadLink-1ywL9o size14-3iUx6q weightMedium-2iZe9B"></a>');
                if (err)
                    button.html(this.local.invalidLocation);
                else {
                    button.html(this.local.quicksave);
                    $(document).on("keydown.qs", e => {
                        if (e.shiftKey)
                            button.html(`${this.local.quicksave} ${this.local.as}...`);
                    }).on('keyup.qs', e => button.html(this.local.quicksave));
                    button.click(e => {
                        button.html(self.local.quicksave);
                        let filePath = null;
                        let videoEl = $('.modal-1UGdnR .imageWrapper-2p5ogY video')[0];
                        if (videoEl) filePath = videoEl.attributes['src'].nodeValue;
                        else filePath = $('.modal-1UGdnR .inner-1JeGVc').find('a').filter('[href^="http"]')[0].attributes['href'].nodeValue;
                        if (e.shiftKey)
                            self.openModal($(PluginUtilities.formatString(self.modals.name, {
                                insertFilename: this.local.modals.filenameChoose.insertFilename,
                                cancel: this.local.modals.generalButtons.cancel,
                                save: this.local.modals.generalButtons.save
                            })), 'filenameChoose', filePath);
                        else
                            self.saveCurrentFile(filePath);
                    });
                }
                elem.after(button);

                // Add a divider before the new link for consistency with other lightbox link plugins
                let divider = $('<span class="downloadLink-1ywL9o size14-3iUx6q weightMedium-2iZe9B" style="margin: 0px 5px;"> | </span>');
                elem.after(divider);
            });
        }

        if (elem.hasClass('contextMenu-HLZMGh')) {
            let link = ReactUtilities.getReactProperty(elem[0], "return.memoizedProps.attachment.url") || ReactUtilities.getReactProperty(elem[0], "return.memoizedProps.src"),
                item = $(`<div class="item-1Yvehc qs-item"><span>${this.local.quicksave}</span><div class="hint-22uc-R"></div></div>`);
            if (link) {
                $(document)
                    .on("keydown.qs", e => {
                        if (e.shiftKey)
                            item.find('span').html(`${this.local.quicksave} ${this.local.as}...`);
                    })
                    .on('keyup.qs', e => item.html(this.local.quicksave));
                item
                    .click(e => {
                        $(document).off('keyup.qs').off('keydown.qs');
                        item.find('span').html(self.local.quicksave);
                        $(elem[0]).hide();
                        if (e.shiftKey) {
                            self.openModal($(PluginUtilities.formatString(self.modals.name, {
                                insertFilename: this.local.modals.filenameChoose.insertFilename,
                                cancel: this.local.modals.generalButtons.cancel,
                                save: this.local.modals.generalButtons.save
                            })), 'filenameChoose', link);
                        } else
                            self.saveCurrentFile(link);
                    });
                $(elem[0]).prepend(item);
            }
        }

        if (elem.find('.downloadButton-23tKQp').length) {
            let anchor = elem.find('.downloadButton-23tKQp').parent(),
                link   = ReactUtilities.getReactProperty(anchor[0], 'memoizedProps.href');
            anchor
                .on('click.qs', e => {
                    e.preventDefault();
                    e.stopPropagation();
                    tooltip.tooltip.remove();
                    if (e.shiftKey) {
                        self.openModal($(PluginUtilities.formatString(self.modals.name, {
                            insertFilename: this.local.modals.filenameChoose.insertFilename,
                            cancel: this.local.modals.generalButtons.cancel,
                            save: this.local.modals.generalButtons.save
                        })), 'filenameChoose', link);
                    } else
                        self.saveCurrentFile(link);
                });
        }
    }
    
    injectThumbIcons() {
		var fs = require('fs');
		let list = document.querySelectorAll("img");
		for (let i = 0; i < list.length; i++) {
			let elem = list[i].parentElement;
			//console.log(elem);
			
			if(	!elem.href
			 || !elem.classList.contains('imageWrapper-2p5ogY')
			 ||  elem.querySelector('.thumbQuicksave')
			) continue;

			let div = document.createElement('div');
			div.innerHTML = "Save";
			div.className = "thumbQuicksave";

			this.loadSettings();
			fs.access(this.settings.directory, fs.W_OK, (err) => {
				if (err)
					div.innerHTML = "Dir Error";
				else
					div.onclick = (e) => {
						// Prevent parent from opening the image
						e.stopPropagation();
						e.preventDefault();
                        
						this.saveThumbImage(e);
					};

				// appendChild but as the first child
				elem.insertAdjacentElement('afterbegin', div);
			});
		}

		// Originally this code was in mutationobserver, but that wasn't reliable.
		// Now we use this timeout loop with global img search. Not optimal but
		// works very well (and maybe even better perfomance wise?)
		this.injectionTimeout = setTimeout(this.injectThumbIcons.bind(this), 2000);
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
            new PluginSettings.Checkbox(this.local.settings.labels.randomizeUnknown, this.local.settings.help.randomizeUnknown, this.settings.randomizeUnknown, checked => {
                this.settings.randomizeUnknown = checked;
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
            $(`<div class='protip-12obwm inline-136HKr'>
                <div class='pro-1T8RK7 small-29zrCQ size12-3R0845 height16-2Lv3qA statusGreen-pvYWjA weightBold-2yjlgw'>${this.local.settings.protip.label}</div>
                <div class='tip-2ab612 primary-jw0I4K'>${this.local.settings.protip.tip}</div>
            </div>`),
            $(`<button type="button" class="button-38aScr lookOutlined-3sRXeN colorRed-1TFJan sizeMedium-1AC_Sl grow-q77ONN" style='margin: 10px 0; float: right;'><div class="contents-18-Yxp">${this.local.reset}</div></button>`)
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
    
    saveCurrentFile(url, filename, overwrite = false) {
        if (url == '') {
            PluginUtilities.showToast(this.local.modals.error.invalidUrl, {type: 'error'});
            return;
        }

        let button = $('#qs_button'),
            fs     = require('fs'),
            dir    = this.settings.directory,
            net    = (url.split('//')[0] == 'https:') ? require('https') : require('http');

        if (/:large$/.test(url))
            url = url.replace(/:large$/, '');
            
        // Get the last instance of something that looks like a valid filename, the last instance of anything usable at all
        let fullFilename = /^\w+:\/\/[^\/]+\/(?:.*?\/)*?([^?=\/\\]+\.\w{3,}(?!.*\.)|[\w-\.]+(?=$|\/mp4))/.exec(url)[1];
        
        // If the URL is so bizarre that nothing matches at all, just give it a random name
        if (!fullFilename)
            fullFilename = this.randomFilename64(this.settings.fnLength);
        
        // If it's a virtualized URL with no valid extension, best we can do is make one up and let the OS (attempt to) handle the rest.
        let dotIndex = fullFilename.indexOf('.');
        if (dotIndex == -1 || fullFilename.length - dotIndex > 5) { // If we don't have a dot, or we do but it's obviously not an extension
            if (url.endsWith('/mp4'))
                fullFilename += '.mp4';
            else
                fullFilename += '.jpg';
        }

        if (!filename && this.settings.norandom)
            filename = fullFilename.substring(0,fullFilename.lastIndexOf('.'));

        if ((!filename && !overwrite && !this.settings.addnum)
            || (this.settings.randomizeUnknown && /^(small|medium|large|image|viewimage|unknown)$/.test(filename)))
            filename = this.randomFilename64(this.settings.fnLength);

        let filetype = '.' + fullFilename.split('.').slice(-1)[0],
            tries    = 50;

        if (this.settings.addnum)
            filename = this.addNumber(filename, filetype);

        if (this.accessSync(dir + filename + filetype) && !overwrite && !this.settings.addnum) {
            return this.openModal($(PluginUtilities.formatString(this.modals.error, {
                alreadyExists: PluginUtilities.formatString(this.local.modals.error.alreadyExists, {filename, filetype}),
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
    
    saveThumbImage(e){
		// Reimplementation of pull #2, icon in thumbnails
		var button = e.srcElement;
		var plugin = BdApi.getPlugin('Quicksave');


		var url = button.parentElement.href;

		if(!url) {
			button.innerHTML = "Error";
			console.error("Couldn't extract url!");
			return;
		}

		button.innerHTML = "Wait";
        var name = url.split('/')[6];
        //console.log(name);
		this.saveCurrentFile(url);
        button.innerHTML = "Saved!";
	}
    
    get defaultSettings() {
        return {
            directory: 'none',
            norandom: false,
            randomizeUnknown: true,
            fnLength: 4,
            showfn: true,
            addnum: false
        };
    }
    get modals() {
        return {
            name: "<div id='quicksave-modal-wrapper'>" +
                    "<div class='callout-backdrop backdrop-1wrmKB'></div>" +
                    "<div class='modal-1UGdnR' style='opacity: 1; transform: scale(1) translateZ(0px);'>" +
                        "<div class='modal-body inner-1JeGVc'>" +
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
                    '<div class="callout-backdrop backdrop-1wrmKB"></div>' +
                    '<div class="modal-1UGdnR" style="opacity: 1; transform: scale(1) translateZ(0px);">' +
                        '<div class="inner-1JeGVc">' +
                            '<form class="modal-3HD5ck container-SaXBYZ">' +
                                '<div class="flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignCenter-1dQNNs noWrap-3jynv6 header-1R_AjF title" style="flex: 0 0 auto;">' +
                                    '<h4 class="h4-AQvcAz title-3sZWYQ size16-14cGz5 height20-mO2eIN weightSemiBold-NJexzi defaultColor-1_ajX0 header-3OkTu9 already_exists">' +
                                        '${alreadyExists}</h4>' +
                                '</div>' +
                                '<div class="scrollerWrap-2lJEkd content-2BXhLs scrollerThemed-2oenus themeGhostHairline-DBD-2d">' +
                                    '<div class="scroller-2FKFPG inner-3wn6Q5 content-KhOrDM">' +
                                        '<div class="spacing-2P-ODW marginBottom20-32qID7 medium-zmzTW- size16-14cGz5 height20-mO2eIN primary-jw0I4K">' +
                                            '${question}</div>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="flex-1xMQg5 flex-1O1GKY horizontalReverse-2eTKWD horizontalReverse-3tRjY7 flex-1O1GKY directionRowReverse-m8IjIq justifyStart-2NDFzi alignStretch-DpGPf3 noWrap-3jynv6 footer-2yfCgX" style="flex: 0 0 auto;">' +
                                    '<button type="button" class="button choose-new">' +
                                        '<div class="contentsDefault-nt2Ym5 contents-18-Yxp contentsFilled-3M8HCx contents-18-Yxp">${chooseNew}</div>' +
                                    '</button>' +
                                    '<button type="button" class="button gen-random">' +
                                        '<div class="contentsDefault-nt2Ym5 contents-18-Yxp contentsFilled-3M8HCx contents-18-Yxp">${genRandom}</div>' +
                                    '</button>' +
                                    '<button type="button" class="button red overwrite">' +
                                        '<div class="contentsDefault-nt2Ym5 contents-18-Yxp contentsFilled-3M8HCx contents-18-Yxp">${overwrite}</div>' +
                                    '</button>' +
                                    '<button type="button" class="button cancel">' +
                                        '<div class="contents-18-Yxp">${cancel}</div>' +
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
                #quicksave-modal-wrapper.closing .container-SaXBYZ {
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
                #quicksave-modal-wrapper .button.cancel {
                    background-color: transparent;
                    color: #fff;
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
                #quicksave-modal-wrapper .container-SaXBYZ {
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
                }
                #quicksave-modal-wrapper {
                    z-index: 1001;
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
                }`,
            thumb: `
                .thumbQuicksave {
                    z-index: 9000!important;

                    background-color: rgba(51, 51, 51, .8);

                    position: absolute;
                    display: block;

                    padding: 3px 9px;
                    margin: 5px;

                    border-radius: 3px;

                    font-family: inherit;
                    color: #FFF;
                    font-weight: 500;
                    font-size: 14px;
                    opacity: 0;
                }

                .messageGroupCozy-1BZuO8:hover .thumbQuicksave,
                .imageWrapper-2p5ogY:hover .thumbQuicksave {
                    opacity: 0.8;
                }

                .thumbQuicksave:hover {
                    opacity: 1 !important;
                }`
        };
    }
}
