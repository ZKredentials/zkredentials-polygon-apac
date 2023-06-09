import { createMessage, encrypt as pgpEncrypt, readKey } from "openpgp";

interface PublicKey {
  keyId: string;
  publicKey: string;
}

/**
 * Encrypt dataToEncrypt
 *
 * @param {Object} dataToEncrypt
 * @param {PublicKey} Object containing keyId and publicKey properties
 *
 * @return {Object} Object containing encryptedMessage and keyId
 */
export const encrypt = async (
  dataToEncrypt: object,
  { keyId, publicKey }: PublicKey
) => {
  if (!publicKey || !keyId) {
    // throw new Error("Unable to encrypt data");
    return null;
  }

  const decodedPublicKey = await readKey({ armoredKey: atob(publicKey) });
  const message = await createMessage({ text: JSON.stringify(dataToEncrypt) });
  return pgpEncrypt({
    message,
    encryptionKeys: decodedPublicKey,
  }).then((ciphertext) => {
    return {
      encryptedMessage: btoa(ciphertext),
      keyId,
    };
  });
};
