import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Order extends Document {
  @Prop({ required: true })
  clientId: string; // ID du client

  @Prop({
    required: true,
    type: [
      {
        productId: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
  })
  products: { productId: string; quantity: number; price: number }[]; // Liste des produits avec ID, quantité et prix

  @Prop({ required: true })
  totalAmount: number; // Montant total de la commande

  @Prop({ default: 'pending' })
  status: string; // Statut de la commande (pending, completed, canceled)

  @Prop({ default: Date.now })
  createdAt: Date; // Date de création de la commande

  @Prop({ required: true })
  address: string; // Adresse de livraison
}

export const OrderSchema = SchemaFactory.createForClass(Order);
