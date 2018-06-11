import { Recognizer, RecognizerResult } from '../recognizer'
import * as Types from '../types'

/**
 * Result object for SwitzerlandPassportRecognizer.
 */
export class SwitzerlandPassportRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * Defines true if Machine Readable Zone has been parsed, false otherwise. 
         */
        this.MRZParsed = nativeResult.MRZParsed;
        
        /** 
         * Defines the entire Machine Readable Zone text from ID. This text is usually used for parsing 
         */
        this.MRZText = nativeResult.MRZText;
        
        /** 
         * Defines true if all check digits inside MRZ are correct, false otherwise. 
         */
        this.MRZVerified = nativeResult.MRZVerified;
        
        /** 
         * Defines alien number.<code>null</code> or empty string if not available. 
         */
        this.alienNumber = nativeResult.alienNumber;
        
        /** 
         * Defines application receipt number.<code>null</code> or empty string if not available. 
         */
        this.applicationReceiptNumber = nativeResult.applicationReceiptNumber;
        
        /** 
         * the authority of Swiss passport. 
         */
        this.authority = nativeResult.authority;
        
        /** 
         * Defines holder's date of birth if it is successfully converted to result from MRZ date format: <code>YYMMDD</code>. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth;
        
        /** 
         * Defines date of expiry if it is successfully converted to result from MRZ date format: <code>YYMMDD</code>. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry;
        
        /** 
         * the date of issue of Swiss passport. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue;
        
        /** 
         * Defines document code. Document code contains two characters. For MRTD the first character shall 
         */
        this.documentCode = nativeResult.documentCode;
        
        /** 
         * Defines document number. Document number contains up to 9 characters. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * Defines the MRTD document type of recognized document. 
         */
        this.documentType = nativeResult.documentType;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * the height of the Swiss passport owner. 
         */
        this.height = nativeResult.height;
        
        /** 
         * Defines immigrant case number.<code>null</code> or empty string if not available. 
         */
        this.immigrantCaseNumber = nativeResult.immigrantCaseNumber;
        
        /** 
         * Defines three-letter or two-letter code which indicate the issuing State. Three-letter codes are based 
         */
        this.issuer = nativeResult.issuer;
        
        /** 
         * the name of the Swiss passport owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * Defines nationality of the holder represented by a three-letter or two-letter code. Three-letter 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * the date of birth of Swiss passport. 
         */
        this.nonMRZDateOfBirth = nativeResult.nonMRZDateOfBirth;
        
        /** 
         * the date of expiry of Swiss passport. 
         */
        this.nonMRZDateOfExpiry = nativeResult.nonMRZDateOfExpiry;
        
        /** 
         * the sex of the Swiss passport owner. 
         */
        this.nonMRZSex = nativeResult.nonMRZSex;
        
        /** 
         * Defines first optional data.<code>null</code> or empty string if not available. 
         */
        this.opt1 = nativeResult.opt1;
        
        /** 
         * Defines second optional data.<code>null</code> or empty string if not available. 
         */
        this.opt2 = nativeResult.opt2;
        
        /** 
         * the passport number of Swiss passport. 
         */
        this.passportNumber = nativeResult.passportNumber;
        
        /** 
         * the place of origin of the Swiss passport owner. 
         */
        this.placeOfOrigin = nativeResult.placeOfOrigin;
        
        /** 
         * Defines the primary indentifier. If there is more than one component, they are separated with space. 
         */
        this.primaryId = nativeResult.primaryId;
        
        /** 
         * Defines the secondary identifier. If there is more than one component, they are separated with space. 
         */
        this.secondaryId = nativeResult.secondaryId;
        
        /** 
         * Defines sex of the card holder. Sex is specified by use of the single initial, 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * the surname of the Swiss passport owner. 
         */
        this.surname = nativeResult.surname;
        
    }
}

/**
 *  Recognizer which scans Swiss passports.

 */
export class SwitzerlandPassportRecognizer extends Recognizer {
    constructor() {
        super('SwitzerlandPassportRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * {true} if the authority is being extracted, {false} otherwise. 
         */
        this.extractAuthority = true;
        
        /** 
         * {true} if the date of birth is being extracted, {false} otherwise. 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * {true} if the date of expiry is being extracted, {false} otherwise. 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * {true} if the date of issue is being extracted, {false} otherwise. 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * {true} if the height is being extracted, {false} otherwise. 
         */
        this.extractHeight = true;
        
        /** 
         * {true} if name is being extracted, {false} otherwise. 
         */
        this.extractName = true;
        
        /** 
         * {true} if the authority is being extracted, {false} otherwise. 
         */
        this.extractPassportNumber = true;
        
        /** 
         * {true} if the place of origin is being extracted, {false} otherwise. 
         */
        this.extractPlaceOfOrigin = true;
        
        /** 
         * {true} if the sex is being extracted, {false} otherwise. 
         */
        this.extractSex = true;
        
        /** 
         * {true} if surname is being extracted, {false} otherwise. 
         */
        this.extractSurname = true;
        
        /** 
         * Defines whether face image will be available in result. 
         */
        this.returnFaceImage = false;
        
        /** 
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new SwitzerlandPassportRecognizerResult(nativeResult); }
    }
}