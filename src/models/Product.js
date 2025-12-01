import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    product_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    sku: { type: String, required: true },
    quantity: { type: Number, required: true },
    original_price: { type: Number, required: true },
    selling_price: { type: Number, required: true },
    description: { type: String, required: true },
    short_summary: { type: String },

    categorization: {
      category_id: { type: Number },
      category_name: { type: String },
      subcategory_id: { type: Number },
      subcategory_name: { type: String },
      festival_tags: [String],
      occasion_tags: [String],
      type: { type: String },
    },

    product_attributes: {
      color: { type: String },
      stem_length_cm: { type: Number },
      fragrance_level: { type: String },
      vase_life_days_min: { type: Number },
      origin: { type: String },
    },

    media: {
      primary_image_url: { type: String },
      gallery_images: [String],
    },

    metrics: {
      average_rating: { type: Number, default: 0 },
      review_count: { type: Number, default: 0 },
      times_ordered: { type: Number, default: 0 },
    },

    customer_reviews: [
      {
        rating: { type: Number },
        review_date: { type: Date },
        comment: { type: String },
      },
    ],

    care_and_logistics: {
      care_instructions: [String],
      shipping_constraints: {
        requires_cold_chain: { type: Boolean, default: false },
        max_delivery_days: { type: Number },
        regional_availability: [String],
      },
      add_ons: [
        {
          name: { type: String },
          product_id: { type: String },
          quantity: { type: Number },
          original_price: { type: Number },
          selling_price: { type: Number },
          image_url: { type: String },
        },
      ],
    },

    variations: [
      {
        variant_id: { type: String },
        variant_sku: { type: String },
        variant_name: { type: String },
        quantity_in_bunch: { type: Number },
        currency: { type: String },
        original_price: { type: Number },
        selling_price: { type: Number },
        discount_percentage: { type: Number },
        inventory: {
          quantity_available: { type: Number },
          reorder_point: { type: Number },
        },
        image_url: { type: String },
      },
    ],

    availability: {
      is_active: { type: Boolean, default: true },
      is_featured: { type: Boolean, default: false },
      last_restock_date: { type: Date },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
