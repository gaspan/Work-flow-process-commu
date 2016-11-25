Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"proses yang sedang berjalan flowmap","publishDate":"11/25/2016 10:16:42 AM","pages":[{"id":"322f336d-b325-46f2-8501-f4f3df704fcf","name":"Diagram 1","version":"1.0","author":"gentu","image":"files\\diagrams\\Diagram_1.png","isSubprocessPage":false,"elements":[{"id":"40b683a0-08f1-4217-bc1a-9eebf7dd4142","name":"proses pengajuan proposal yang sedang berjalan","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":440.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"e6568b3b-0357-40e6-8ce8-fc7a185eb0f9","name":"Event","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":131.0,"y":123.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"b869ea7b-832a-4753-90ac-cd1284446ae5","name":"pengajuan \rproposal","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":214.0,"y":108.0}],"radius":0.0,"height":60.0,"width":115.0,"shape":"rect"},"elementType":"SubProcess","properties":[]},{"id":"e72494d4-b69f-47cb-a1af-c040d99b0027","name":"  mereview proposal","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":221.0,"y":348.0}],"radius":0.0,"height":60.0,"width":100.0,"shape":"rect"},"elementType":"SubProcess","properties":[]},{"id":"ac04c7cd-5fe7-4cd3-bc44-7badc2857cca","name":"kirim proposal","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":350.0,"y":348.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"882db5a2-a2c3-4d09-9e99-81c1143630dd","name":"lihat hasil review proposal","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":350.0,"y":108.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e8d63b87-1134-4a82-bb93-53800b5bbd2a","name":"diterima?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":504.0,"y":110.0}],"radius":0.0,"height":56.0,"width":56.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"tidak","elementType":"SequenceFlow","properties":[]},{"name":"ya","elementType":"SequenceFlow","properties":[]}]},{"id":"73fc60c4-a83b-40cc-a7b0-bd4ad6add1de","name":"berikan dana","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":487.0,"y":367.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2933b6db-02ab-4183-9d92-10bed7ea5510","name":"Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":631.0,"y":377.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"berikan dana  partnership","elementType":"SequenceFlow","properties":[]},{"name":"melakukan kerjasama (partnership)","elementType":"SequenceFlow","properties":[]}]},{"id":"e1f5691f-a0b7-4717-8eec-6075f77d1585","name":"melakukan kerjasama (partnership)","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":759.0,"y":367.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b138e8ff-55d3-4f81-8b2f-5aa19bbb983c","name":"terima kerjasama  untuk membuat event","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":743.0,"y":165.0}],"radius":0.0,"height":60.0,"width":121.0,"shape":"rect"},"elementType":"SubProcess","properties":[]},{"id":"a1c17bfe-50da-4ea1-b240-64f9631485eb","name":"menerima feedback dari komunitas / organisasi","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":901.0,"y":348.0}],"radius":0.0,"height":76.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"67cbc06b-db15-488d-944b-0d4f9109d733","name":"Event","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1023.0,"y":371.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"adfd11b7-3ed4-4463-b5c2-f646c60a5927","name":"berikan dana  partnership","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":606.0,"y":276.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0daefd53-a19d-4b47-b7e8-88bbf2192e7c","name":"terima dana sponsorship","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":606.0,"y":58.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5fd49581-7363-42ec-a835-944fc4ddc65d","name":"melaksanakan event","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":753.0,"y":58.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4925e2a7-c088-4c95-9d94-abdf6008bdf3","name":"Event","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":929.0,"y":73.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"920d8717-3484-4c11-b90d-5a273d67c5af","name":"anggota komunitas/ organisasi","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":244.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"0fb7bee9-8259-42ac-8e35-3521c9a128fb","name":"perusahaan","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":264.0}],"radius":0.0,"height":196.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}],"subPages":[]}],"texts":{"tableOfContents":"Table of Contents","pageNumber":"Page","pageNumberLabelOf":"of","version":"Version","author":"Author","description":"Description","mainPool":"Main Process","mainPoolDescription":"Main Process Description","processDiagrams":"Process Diagrams","processElements":"Process Elements","elements":"Process Elements","defaultElementName":"Element","performers":"Performers","connectors":"Connectors","connector":"Connector","home":"Home","search":"Search","goToParentProcess":"<< Go to Parent Process","visitBizagi":"Visit bizagi.com","contains":"Contains {0} Sub-Processes","showAll":"Show all","fullScreen":"Full screen","zoomIn":"Zoom In","zoomOut":"Zoom Out","close":"Close","menu":"Menu: ","errorPage":"Error when visualizing page","process":"Process","subProcess":"Published Sub-Processes","contain":"Contains","checkAttributes":"Check attributes","checkOverview":"Check overview","unavailableResource":"Unavailable resource","localResource":"Resource can be accessed locally","performer":"Performer","linktoimage":"Link to Image","presentationAction":"Presentation Actions","searchGlobal":"Search all","searchLocal":"Search in this process","searchResults":"No Results Found","titlePage":"Start","emptyElement":"This element has not yet been documented","unsupported":"Your browser does not support content displayed by this page. <br> We recommend you upgrading your browser.","details":"Details","expand":"Expand","mainPoolProperties":"Main Process properties","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"322f336d-b325-46f2-8501-f4f3df704fcf","containerName":"Diagram 1","isSubprocess":false,"elements":[{"id":"40b683a0-08f1-4217-bc1a-9eebf7dd4142","value":"proses pengajuan proposal yang sedang berjalan"},{"id":"920d8717-3484-4c11-b90d-5a273d67c5af","value":"anggota komunitas/ organisasi"},{"id":"0fb7bee9-8259-42ac-8e35-3521c9a128fb","value":"perusahaan"},{"id":"e6568b3b-0357-40e6-8ce8-fc7a185eb0f9","value":""},{"id":"ac04c7cd-5fe7-4cd3-bc44-7badc2857cca","value":"kirim proposal"},{"id":"882db5a2-a2c3-4d09-9e99-81c1143630dd","value":"lihat hasil review proposal"},{"id":"e8d63b87-1134-4a82-bb93-53800b5bbd2a","value":"diterima?"},{"id":"73fc60c4-a83b-40cc-a7b0-bd4ad6add1de","value":"berikan dana"},{"id":"adfd11b7-3ed4-4463-b5c2-f646c60a5927","value":"berikan dana  partnership"},{"id":"0daefd53-a19d-4b47-b7e8-88bbf2192e7c","value":"terima dana sponsorship"},{"id":"5fd49581-7363-42ec-a835-944fc4ddc65d","value":"melaksanakan event"},{"id":"4925e2a7-c088-4c95-9d94-abdf6008bdf3","value":""},{"id":"e1f5691f-a0b7-4717-8eec-6075f77d1585","value":"melakukan kerjasama (partnership)"},{"id":"a1c17bfe-50da-4ea1-b240-64f9631485eb","value":"menerima feedback dari komunitas / organisasi"},{"id":"67cbc06b-db15-488d-944b-0d4f9109d733","value":""},{"id":"b869ea7b-832a-4753-90ac-cd1284446ae5","value":"pengajuan \rproposal"},{"id":"e72494d4-b69f-47cb-a1af-c040d99b0027","value":"  mereview proposal"},{"id":"b138e8ff-55d3-4f81-8b2f-5aa19bbb983c","value":"terima kerjasama  untuk membuat event"},{"id":"2933b6db-02ab-4183-9d92-10bed7ea5510","value":""}]},{"containerId":"b869ea7b-832a-4753-90ac-cd1284446ae5","containerName":"pengajuan \rproposal","isSubprocess":true,"elements":[{"id":"32dc34b6-ff07-46e7-9f42-f7fd49433b65","value":""},{"id":"e438ce23-b5a1-4fea-86f4-247f61295669","value":"buat proposal"},{"id":"e89ec1aa-ed70-4efe-9ae9-5dd967e1c2d2","value":"disetujui?"},{"id":"04363a92-5a6c-4979-ba3c-530dc231b659","value":"tanda  tangan"},{"id":"ed1eea31-bdc6-4f51-840c-cbe9b81395f6","value":"ajukan proposal"},{"id":"c23a00a3-e26d-4d62-b791-a56a9f865b4a","value":""},{"id":"43edd9e0-75b4-4287-9ce3-64890e3bbc4f","value":"revisi "},{"id":"b2f19ef4-8287-4572-8a87-a85b7b5888cf","value":"ajukan persetujuan proposal"}]},{"containerId":"e72494d4-b69f-47cb-a1af-c040d99b0027","containerName":"  mereview proposal","isSubprocess":true,"elements":[{"id":"0b3cf454-8aec-4947-b1c0-33e07f985ba7","value":""},{"id":"13680cd3-240d-49fd-9494-287de57eadc3","value":"terima proposal"},{"id":"28b46efe-5aab-4ff7-9748-1af9c6d2de15","value":"penentuan proposal"},{"id":"20e59ec4-4105-480f-b80f-991f5219c7cc","value":"kirim ke komunitas"},{"id":"354f572e-6ba7-4982-a892-ffd4737a54b7","value":""},{"id":"5548d8e4-f140-4c6a-8fef-29d442f65302","value":""},{"id":"1238c09c-846b-4b81-8348-35f37405b46d","value":""},{"id":"8e0272db-3dc7-4c15-b8d7-86e341b31a98","value":""},{"id":"523d8a74-6b07-45ff-9d66-0b5b4cc08417","value":"partnership"},{"id":"22e73f98-ba64-42cd-a870-44f0aff01f84","value":"dana"},{"id":"fd5ca03f-b8f4-4b04-a7e7-6193f1464aa0","value":""},{"id":"e445d108-42f4-4da5-9426-4cdee5bf7b98","value":"tentukan  jenis bantuan"}]},{"containerId":"b138e8ff-55d3-4f81-8b2f-5aa19bbb983c","containerName":"terima kerjasama  untuk membuat event","isSubprocess":true,"elements":[{"id":"719af3c4-933b-41a7-a402-53ba73d722f9","value":""},{"id":"f81f9f41-de14-4b9e-ac6c-40e5d6e5ad13","value":"terima kerjasama dengan "},{"id":"17dc2b63-aaef-4c4e-ab03-d17aa7db5500","value":"lakukaan kerjasama  ketika event"},{"id":"07f063fb-14cb-4dde-93ee-825a244307f3","value":"memberikan feedback ke perusahaan"},{"id":"9f6bf8a9-c0eb-4b31-ae5e-55c9d8ae5aa2","value":""}]}]}