package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class AustriaCombinedRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.austria.AustriaCombinedRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.austria.AustriaCombinedRecognizer();
        if (jsonRecognizer.hasKey("detectGlare")) {
            recognizer.setDetectGlare(jsonRecognizer.getBoolean("detectGlare"));
        }
        if (jsonRecognizer.hasKey("extractDateOfBirth")) {
            recognizer.setExtractDateOfBirth(jsonRecognizer.getBoolean("extractDateOfBirth"));
        }
        if (jsonRecognizer.hasKey("extractDateOfExpiry")) {
            recognizer.setExtractDateOfExpiry(jsonRecognizer.getBoolean("extractDateOfExpiry"));
        }
        if (jsonRecognizer.hasKey("extractDateOfIssue")) {
            recognizer.setExtractDateOfIssue(jsonRecognizer.getBoolean("extractDateOfIssue"));
        }
        if (jsonRecognizer.hasKey("extractHeight")) {
            recognizer.setExtractHeight(jsonRecognizer.getBoolean("extractHeight"));
        }
        if (jsonRecognizer.hasKey("extractIssuingAuthority")) {
            recognizer.setExtractIssuingAuthority(jsonRecognizer.getBoolean("extractIssuingAuthority"));
        }
        if (jsonRecognizer.hasKey("extractNationality")) {
            recognizer.setExtractNationality(jsonRecognizer.getBoolean("extractNationality"));
        }
        if (jsonRecognizer.hasKey("extractPlaceOfBirth")) {
            recognizer.setExtractPlaceOfBirth(jsonRecognizer.getBoolean("extractPlaceOfBirth"));
        }
        if (jsonRecognizer.hasKey("extractPrincipalResidence")) {
            recognizer.setExtractPrincipalResidence(jsonRecognizer.getBoolean("extractPrincipalResidence"));
        }
        if (jsonRecognizer.hasKey("extractSex")) {
            recognizer.setExtractSex(jsonRecognizer.getBoolean("extractSex"));
        }
        if (jsonRecognizer.hasKey("returnFaceImage")) {
            recognizer.setReturnFaceImage(jsonRecognizer.getBoolean("returnFaceImage"));
        }
        if (jsonRecognizer.hasKey("returnFullDocumentImage")) {
            recognizer.setReturnFullDocumentImage(jsonRecognizer.getBoolean("returnFullDocumentImage"));
        }
        if (jsonRecognizer.hasKey("returnSignatureImage")) {
            recognizer.setReturnSignatureImage(jsonRecognizer.getBoolean("returnSignatureImage"));
        }
        if (jsonRecognizer.hasKey("signResult")) {
            recognizer.setSignResult(jsonRecognizer.getBoolean("signResult"));
        }
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?, ?> recognizer) {
        com.microblink.entities.recognizers.blinkid.austria.AustriaCombinedRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.austria.AustriaCombinedRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putBoolean("MRZVerified", result.isMRZVerified());
        jsonResult.putMap("dateOfBirth", SerializationUtils.serializeDate(result.getDateOfBirth()));
        jsonResult.putMap("dateOfIssuance", SerializationUtils.serializeDate(result.getDateOfIssuance()));
        jsonResult.putString("digitalSignature", SerializationUtils.encodeByteArrayToBase64(result.getDigitalSignature()));
        jsonResult.putString("digitalSignatureVersion", result.getDigitalSignatureVersion());
        jsonResult.putBoolean("documentDataMatch", result.isDocumentDataMatch());
        jsonResult.putMap("documentDateOfExpiry", SerializationUtils.serializeDate(result.getDocumentDateOfExpiry()));
        jsonResult.putString("eyeColour", result.getEyeColour());
        jsonResult.putString("faceImage", SerializationUtils.encodeImageBase64(result.getFaceImage()));
        jsonResult.putString("firstName", result.getFirstName());
        jsonResult.putString("fullDocumentBackImage", SerializationUtils.encodeImageBase64(result.getFullDocumentBackImage()));
        jsonResult.putString("fullDocumentFrontImage", SerializationUtils.encodeImageBase64(result.getFullDocumentFrontImage()));
        jsonResult.putInt("height", result.getHeight());
        jsonResult.putString("identityCardNumber", result.getIdentityCardNumber());
        jsonResult.putString("issuingAuthority", result.getIssuingAuthority());
        jsonResult.putString("lastName", result.getLastName());
        jsonResult.putString("nationality", result.getNationality());
        jsonResult.putString("placeOfBirth", result.getPlaceOfBirth());
        jsonResult.putString("principalResidenceAtIssuance", result.getPrincipalResidenceAtIssuance());
        jsonResult.putBoolean("scanningFirstSideDone", result.isScanningFirstSideDone());
        jsonResult.putString("sex", result.getSex());
        jsonResult.putString("signatureImage", SerializationUtils.encodeImageBase64(result.getSignatureImage()));
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "AustriaCombinedRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.austria.AustriaCombinedRecognizer.class;
    }
}