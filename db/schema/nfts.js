import mongoose from 'mongoose';

const { Schema } = mongoose;

const NftsSchema = new Schema(
  {
    Name: String,
    type: String,
    groupId: String,
  },
  { timestamps: true },
);

const Nfts = mongoose.model('Nfts', NftsSchema);

export { Nfts };
