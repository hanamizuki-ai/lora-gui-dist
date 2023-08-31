const e=JSON.parse(`{"key":"v-1bf725da","path":"/lora/master.html","title":"LoRA \u8BAD\u7EC3 \u4E13\u5BB6\u6A21\u5F0F","lang":"en-US","frontmatter":{"example":true,"trainType":"lora-master","code":"Schema.intersect([\\n    Schema.intersect([\\n        Schema.object({\\n            model_train_type: Schema.union([\\"sd-lora\\", \\"sdxl-lora\\"]).default(\\"sd-lora\\").description(\\"\u6A21\u578B\u79CD\u7C7B\\"),\\n            pretrained_model_name_or_path: Schema.string().role('textarea').default(\\"./sd-models/model.ckpt\\").description(\\"\u5E95\u6A21\u6587\u4EF6\u8DEF\u5F84\\"),\\n            vae: Schema.string().role('textarea').description(\\"(\u53EF\u9009) VAE \u6A21\u578B\u6587\u4EF6\u8DEF\u5F84\uFF0C\u4F7F\u7528\u5916\u7F6E VAE \u6587\u4EF6\u8986\u76D6\u6A21\u578B\u5185\u672C\u8EAB\u7684\\"),\\n            v2: Schema.boolean().default(false).description(\\"\u5E95\u6A21\u4E3A sd2.0 \u4EE5\u540E\u7684\u7248\u672C\u9700\u8981\u542F\u7528\\"),\\n        }).description(\\"\u8BAD\u7EC3\u7528\u6A21\u578B\\"),\\n\\n        Schema.union([\\n            Schema.object({\\n                v2: Schema.const(true).required(),\\n                v_parameterization: Schema.boolean().default(false).description(\\"v-parameterization \u5B66\u4E60\\"),\\n                scale_v_pred_loss_like_noise_pred: Schema.boolean().default(false).description(\\"\u7F29\u653E v-prediction \u635F\u5931\uFF08\u4E0Ev-parameterization\u914D\u5408\u4F7F\u7528\uFF09\\"),\\n            }),\\n            Schema.object({}),\\n        ]),\\n    ]),\\n\\n    Schema.object({\\n        train_data_dir: Schema.string().role('textarea').default(\\"./train/aki\\").description(\\"\u8BAD\u7EC3\u6570\u636E\u96C6\u8DEF\u5F84\\"),\\n        reg_data_dir: Schema.string().role('textarea').description(\\"\u6B63\u5219\u5316\u6570\u636E\u96C6\u8DEF\u5F84\u3002\u9ED8\u8BA4\u7559\u7A7A\uFF0C\u4E0D\u4F7F\u7528\u6B63\u5219\u5316\u56FE\u50CF\\"),\\n        prior_loss_weight: Schema.number().step(0.1).default(1.0).description(\\"\u6B63\u5219\u5316 - \u5148\u9A8C\u635F\u5931\u6743\u91CD\\"),\\n        resolution: Schema.string().default(\\"512,512\\").description(\\"\u8BAD\u7EC3\u56FE\u7247\u5206\u8FA8\u7387\uFF0C\u5BBDx\u9AD8\u3002\u652F\u6301\u975E\u6B63\u65B9\u5F62\uFF0C\u4F46\u5FC5\u987B\u662F 64 \u500D\u6570\u3002\\"),\\n        enable_bucket: Schema.boolean().default(true).description(\\"\u542F\u7528 arb \u6876\u4EE5\u5141\u8BB8\u975E\u56FA\u5B9A\u5BBD\u9AD8\u6BD4\u7684\u56FE\u7247\\"),\\n        min_bucket_reso: Schema.number().default(256).description(\\"arb \u6876\u6700\u5C0F\u5206\u8FA8\u7387\\"),\\n        max_bucket_reso: Schema.number().default(1024).description(\\"arb \u6876\u6700\u5927\u5206\u8FA8\u7387\\"),\\n        bucket_reso_steps: Schema.number().default(64).description(\\"arb \u6876\u5206\u8FA8\u7387\u5212\u5206\u5355\u4F4D\uFF0CSDXL \u53EF\u4EE5\u4F7F\u7528 32\\"),\\n    }).description(\\"\u6570\u636E\u96C6\u8BBE\u7F6E\\"),\\n\\n    Schema.object({\\n        output_name: Schema.string().default(\\"aki\\").description(\\"\u6A21\u578B\u4FDD\u5B58\u540D\u79F0\\"),\\n        output_dir: Schema.string().default(\\"./output\\").description(\\"\u6A21\u578B\u4FDD\u5B58\u6587\u4EF6\u5939\\"),\\n        save_model_as: Schema.union([\\"safetensors\\", \\"pt\\", \\"ckpt\\"]).default(\\"safetensors\\").description(\\"\u6A21\u578B\u4FDD\u5B58\u683C\u5F0F\\"),\\n        save_precision: Schema.union([\\"fp16\\", \\"float\\",\\"bf16\\"]).default(\\"fp16\\").description(\\"\u6A21\u578B\u4FDD\u5B58\u7CBE\u5EA6\\"),\\n        save_every_n_epochs: Schema.number().default(2).description(\\"\u6BCF N epoch\uFF08\u8F6E\uFF09\u81EA\u52A8\u4FDD\u5B58\u4E00\u6B21\u6A21\u578B\\"),\\n    }).description(\\"\u4FDD\u5B58\u8BBE\u7F6E\\"),\\n\\n    Schema.object({\\n        max_train_epochs: Schema.number().min(1).default(10).description(\\"\u6700\u5927\u8BAD\u7EC3 epoch\uFF08\u8F6E\u6570\uFF09\\"),\\n        train_batch_size: Schema.number().min(1).default(1).description(\\"\u6279\u91CF\u5927\u5C0F\\"),\\n        gradient_checkpointing: Schema.boolean().default(false).description(\\"\u68AF\u5EA6\u68C0\u67E5\u70B9\\"),\\n        gradient_accumulation_steps: Schema.number().min(1).description(\\"\u68AF\u5EA6\u7D2F\u52A0\u6B65\u6570\\"),\\n        network_train_unet_only: Schema.boolean().default(false).description(\\"\u4EC5\u8BAD\u7EC3 U-Net\\"),\\n        network_train_text_encoder_only: Schema.boolean().default(false).description(\\"\u4EC5\u8BAD\u7EC3\u6587\u672C\u7F16\u7801\u5668\\"),\\n    }).description(\\"\u8BAD\u7EC3\u76F8\u5173\u53C2\u6570\\"),\\n\\n    Schema.intersect([\\n        Schema.object({\\n            learning_rate: Schema.string().default(\\"1e-4\\").description(\\"\u603B\u5B66\u4E60\u7387\uFF0C\u5728\u5206\u5F00\u8BBE\u7F6E U-Net \u4E0E\u6587\u672C\u7F16\u7801\u5668\u5B66\u4E60\u7387\u540E\u8FD9\u4E2A\u503C\u5931\u6548\u3002\\"),\\n            unet_lr: Schema.string().default(\\"1e-4\\").description(\\"U-Net \u5B66\u4E60\u7387\\"),\\n            text_encoder_lr: Schema.string().default(\\"1e-5\\").description(\\"\u6587\u672C\u7F16\u7801\u5668\u5B66\u4E60\u7387\\"),\\n            lr_scheduler: Schema.union([\\n                \\"linear\\",\\n                \\"cosine\\",\\n                \\"cosine_with_restarts\\",\\n                \\"polynomial\\",\\n                \\"constant\\",\\n                \\"constant_with_warmup\\",\\n            ]).default(\\"cosine_with_restarts\\").description(\\"\u5B66\u4E60\u7387\u8C03\u5EA6\u5668\u8BBE\u7F6E\\"),\\n            lr_warmup_steps: Schema.number().default(0).description('\u5B66\u4E60\u7387\u9884\u70ED\u6B65\u6570'),\\n        }).description(\\"\u5B66\u4E60\u7387\u4E0E\u4F18\u5316\u5668\u8BBE\u7F6E\\"),\\n\\n        Schema.union([\\n            Schema.object({\\n                lr_scheduler: Schema.const('cosine_with_restarts'),\\n                lr_scheduler_num_cycles: Schema.number().default(1).description('\u91CD\u542F\u6B21\u6570'),\\n            }),\\n            Schema.object({}),\\n        ]),\\n\\n        Schema.object({\\n            optimizer_type: Schema.union([\\n                \\"AdamW\\",\\n                \\"AdamW8bit\\",\\n                \\"PagedAdamW8bit\\",\\n                \\"Lion\\",\\n                \\"Lion8bit\\",\\n                \\"PagedLion8bit\\",\\n                \\"SGDNesterov\\",\\n                \\"SGDNesterov8bit\\",\\n                \\"DAdaptation\\",\\n                \\"DAdaptAdam\\",\\n                \\"DAdaptAdaGrad\\",\\n                \\"DAdaptAdanIP\\",\\n                \\"DAdaptLion\\",\\n                \\"DAdaptSGD\\",\\n                \\"AdaFactor\\",\\n                \\"Prodigy\\"\\n            ]).default(\\"AdamW8bit\\").description(\\"\u4F18\u5316\u5668\u8BBE\u7F6E\\"),\\n            min_snr_gamma: Schema.number().step(0.1).description(\\"\u6700\u5C0F\u4FE1\u566A\u6BD4\u4F3D\u9A6C\u503C\uFF0C\u5982\u679C\u542F\u7528\u63A8\u8350\u4E3A 5\\"),\\n        }),\\n\\n        Schema.union([\\n            Schema.object({\\n                optimizer_type: Schema.const('Prodigy').required(),\\n                prodigy_d0: Schema.string(),\\n                prodigy_d_coef: Schema.string().default(\\"2.0\\"),\\n            }),\\n            Schema.object({}),\\n        ]),\\n\\n        Schema.object({\\n            optimizer_args_custom: Schema.array(String).role('table').description('\u81EA\u5B9A\u4E49 optimizer_args\uFF0C\u4E00\u884C\u4E00\u4E2A'),\\n        })\\n    ]),\\n\\n    Schema.intersect([\\n        Schema.object({\\n            network_module: Schema.union([\\"networks.lora\\", \\"networks.dylora\\",\\"lycoris.kohya\\"]).default(\\"networks.lora\\").description(\\"\u8BAD\u7EC3\u7F51\u7EDC\u6A21\u5757\\"),\\n            network_weights: Schema.string().role('textarea').description(\\"\u4ECE\u5DF2\u6709\u7684 LoRA \u6A21\u578B\u4E0A\u7EE7\u7EED\u8BAD\u7EC3\uFF0C\u586B\u5199\u8DEF\u5F84\\"),\\n            network_dim: Schema.number().min(8).max(256).step(8).default(32).description(\\"\u7F51\u7EDC\u7EF4\u5EA6\uFF0C\u5E38\u7528 4~128\uFF0C\u4E0D\u662F\u8D8A\u5927\u8D8A\u597D\\"),\\n            network_alpha: Schema.number().min(1).default(32).description(\\n                \\"\u5E38\u7528\u4E0E network_dim \u76F8\u540C\u7684\u503C\u6216\u8005\u91C7\u7528\u8F83\u5C0F\u7684\u503C\uFF0C\u5982 network_dim \u7684\u4E00\u534A \u9632\u6B62\u4E0B\u6EA2\u3002\u4F7F\u7528\u8F83\u5C0F\u7684 alpha \u9700\u8981\u63D0\u5347\u5B66\u4E60\u7387\u3002\\"\\n            ),\\n            network_dropout: Schema.number().step(0.01).default(0).description('dropout \u6982\u7387 \uFF08\u4E0E lycoris \u4E0D\u517C\u5BB9\uFF0C\u9700\u8981\u7528 lycoris \u81EA\u5E26\u7684\uFF09'),\\n            scale_weight_norms: Schema.number().step(0.01).min(0).max(1).description(\\"\u6700\u5927\u8303\u6570\u6B63\u5219\u5316\u3002\u5982\u679C\u4F7F\u7528\uFF0C\u63A8\u8350\u4E3A 1\\"),\\n            network_args_custom: Schema.array(String).role('table').description('\u81EA\u5B9A\u4E49 network_args\uFF0C\u4E00\u884C\u4E00\u4E2A'),\\n            enable_block_weights: Schema.boolean().default(false).description('\u542F\u7528\u5206\u5C42\u5B66\u4E60\u7387\u8BAD\u7EC3\uFF08\u53EA\u80FD\u5728 networks.lora \u4E2D\u4F7F\u7528\uFF0C\u4E0E\u5176\u4ED6\u7F51\u7EDC\u6A21\u5757\u4E0D\u517C\u5BB9\uFF09'),\\n            enable_base_weight: Schema.boolean().default(false).description('\u5DEE\u5F02\u70BC\u4E39'),\\n        }).description(\\"\u7F51\u7EDC\u8BBE\u7F6E\\"),\\n\\n        Schema.union([\\n            Schema.object({\\n                network_module: Schema.const('lycoris.kohya').required(),\\n                lycoris_algo: Schema.union([\\"locon\\", \\"loha\\", \\"lokr\\", \\"ia3\\", \\"dylora\\"]).default(\\"locon\\").description('LyCORIS \u7F51\u7EDC\u7B97\u6CD5'),\\n                conv_dim: Schema.number().default(4),\\n                conv_alpha: Schema.number().default(1),\\n                dropout: Schema.number().step(0.01).default(0).description('dropout \u6982\u7387\u3002\u63A8\u8350 0~0.5\uFF0CLoHa/LoKr/(IA)^3\u6682\u4E0D\u652F\u6301')\\n            }),\\n            Schema.object({\\n                network_module: Schema.const('networks.dylora').required(),\\n                dylora_unit: Schema.number().min(1).default(4).description('\u5206\u5272\u5757\u6570\u5355\u4F4D\uFF0C\u6700\u5C0F 1 \u4E5F\u6700\u6162\u3002\u4E00\u822C4\u30018\u300112\u300116\u8FD9\u51E0\u4E2A\u9009'),\\n            }),\\n            Schema.object({}),\\n        ]),\\n\\n        Schema.union([\\n            Schema.object({\\n                enable_block_weights: Schema.const(true).required(),\\n                down_lr_weight: Schema.string().role('folder').default(\\"1,1,1,1,1,1,1,1,1,1,1,1\\").description(\\"U-Net \u7684 Encoder \u5C42\u5206\u5C42\u5B66\u4E60\u7387\u6743\u91CD\uFF0C\u5171 12 \u5C42\\"),\\n                mid_lr_weight: Schema.string().role('folder').default(\\"1\\").description(\\"U-Net \u7684 Mid \u5C42\u5206\u5C42\u5B66\u4E60\u7387\u6743\u91CD\uFF0C\u5171 1 \u5C42\\"),\\n                up_lr_weight: Schema.string().role('folder').default(\\"1,1,1,1,1,1,1,1,1,1,1,1\\").description(\\"U-Net \u7684 Decoder \u5C42\u5206\u5C42\u5B66\u4E60\u7387\u6743\u91CD\uFF0C\u5171 12 \u5C42\\"),\\n                block_lr_zero_threshold: Schema.number().step(0.01).default(0).description(\\"\u5206\u5C42\u5B66\u4E60\u7387\u7F6E 0 \u9608\u503C\\"),\\n            }),\\n            Schema.object({}),\\n        ]),\\n\\n        Schema.union([\\n            Schema.object({\\n                enable_base_weight: Schema.const(true).required(),\\n                base_weights: Schema.string().role('textarea').description(\\"\u5408\u5E76\u5165\u5E95\u6A21\u7684LoRA\u8DEF\u5F84\uFF0C\u4E00\u884C\u4E00\u4E2A\\"),\\n                base_weights_multiplier: Schema.string().role('textarea').description(\\"\u5408\u5E76\u5165\u5E95\u6A21\u7684LoRA \u6743\u91CD\uFF0C\u4E00\u884C\u4E00\u4E2A\\"),\\n            }),\\n            Schema.object({}),\\n        ]),\\n    ]),\\n\\n    Schema.intersect([\\n        Schema.object({\\n            enable_preview: Schema.boolean().default(false).description('\u542F\u7528\u8BAD\u7EC3\u9884\u89C8\u56FE'),\\n        }).description('\u8BAD\u7EC3\u9884\u89C8\u56FE\u8BBE\u7F6E'),\\n\\n        Schema.union([\\n            Schema.object({\\n                enable_preview: Schema.const(true).required(),\\n                sample_prompts: Schema.string().role('textarea').default(\\"(masterpiece, best quality:1.2), 1girl, solo, --n lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts,signature, watermark, username, blurry,  --w 512  --h 768  --l 7  --s 24  --d 1337\\").description(\\"\u9884\u89C8\u56FE\u751F\u6210\u53C2\u6570\u3002\`--n\` \u540E\u65B9\u4E3A\u53CD\u5411\u63D0\u793A\u8BCD\uFF0C<br>\`--w\`\u5BBD\uFF0C\`--h\`\u9AD8<br>\`--l\`: CFG Scale<br>\`--s\`: \u8FED\u4EE3\u6B65\u6570<br>\`--d\`: \u79CD\u5B50\\"),\\n                sample_sampler: Schema.union([\\"ddim\\", \\"pndm\\", \\"lms\\", \\"euler\\", \\"euler_a\\", \\"heun\\", \\"dpm_2\\", \\"dpm_2_a\\", \\"dpmsolver\\", \\"dpmsolver++\\", \\"dpmsingle\\", \\"k_lms\\", \\"k_euler\\", \\"k_euler_a\\", \\"k_dpm_2\\", \\"k_dpm_2_a\\"]).default(\\"euler_a\\").description(\\"\u751F\u6210\u9884\u89C8\u56FE\u6240\u7528\u91C7\u6837\u5668\\"),\\n                sample_every_n_epochs: Schema.number().default(2).description(\\"\u6BCF N \u4E2A epoch \u751F\u6210\u4E00\u6B21\u9884\u89C8\u56FE\\"),\\n            }),\\n            Schema.object({}),\\n        ]),\\n    ]),\\n\\n    Schema.intersect([\\n        Schema.object({\\n            log_with: Schema.union([\\"tensorboard\\", \\"wandb\\"]).default(\\"tensorboard\\").description(\\"\u65E5\u5FD7\u6A21\u5757\\"),\\n            log_prefix: Schema.string().description(\\"\u65E5\u5FD7\u524D\u7F00\\"),\\n            log_tracker_name: Schema.string().description(\\"\u65E5\u5FD7\u8FFD\u8E2A\u5668\u540D\u79F0\\"),\\n            logging_dir: Schema.string().default(\\"./logs\\").description(\\"\u65E5\u5FD7\u4FDD\u5B58\u6587\u4EF6\u5939\\"),\\n        }).description('\u65E5\u5FD7\u8BBE\u7F6E'),\\n\\n        Schema.union([\\n            Schema.object({\\n                log_with: Schema.const(\\"wandb\\").required(),\\n                wandb_api_key: Schema.string().required().description(\\"wandb \u7684 api \u5BC6\u94A5\\"),\\n            }),\\n            Schema.object({}),\\n        ]),\\n    ]),\\n\\n    Schema.object({\\n        caption_extension: Schema.string().default(\\".txt\\").description(\\"Tag \u6587\u4EF6\u6269\u5C55\u540D\\"),\\n        shuffle_caption: Schema.boolean().default(true).description(\\"\u8BAD\u7EC3\u65F6\u968F\u673A\u6253\u4E71 tokens\\"),\\n        weighted_captions: Schema.boolean().default(false).description(\\"\u4F7F\u7528\u5E26\u6743\u91CD\u7684 token\uFF0C\u4E0D\u63A8\u8350\u4E0E shuffle_caption \u4E00\u540C\u5F00\u542F\\"),\\n        keep_tokens: Schema.number().min(0).max(255).step(1).default(0).description(\\"\u5728\u968F\u673A\u6253\u4E71 tokens \u65F6\uFF0C\u4FDD\u7559\u524D N \u4E2A\u4E0D\u53D8\\"),\\n        max_token_length: Schema.number().default(255).description(\\"\u6700\u5927 token \u957F\u5EA6\\"),\\n        caption_dropout_rate: Schema.number().min(0).max(1).step(0.1).description(\\"\u4E22\u5F03\u5168\u90E8\u6807\u7B7E\u7684\u6982\u7387\uFF0C\u5BF9\u4E00\u4E2A\u56FE\u7247\u6982\u7387\u4E0D\u4F7F\u7528 caption \u6216 class token\\"),\\n        caption_dropout_every_n_epochs: Schema.number().min(0).max(100).step(1).description(\\"\u6BCF N \u4E2A epoch \u4E22\u5F03\u5168\u90E8\u6807\u7B7E\\"),\\n        caption_tag_dropout_rate: Schema.number().min(0).max(1).step(0.1).description(\\"\u6309\u9017\u53F7\u5206\u9694\u7684\u6807\u7B7E\u6765\u968F\u673A\u4E22\u5F03 tag \u7684\u6982\u7387\\"),\\n    }).description(\\"caption\uFF08Tag\uFF09\u9009\u9879\\"),\\n\\n    Schema.object({\\n        noise_offset: Schema.number().step(0.01).description(\\"\u5728\u8BAD\u7EC3\u4E2D\u6DFB\u52A0\u566A\u58F0\u504F\u79FB\u6765\u6539\u826F\u751F\u6210\u975E\u5E38\u6697\u6216\u8005\u975E\u5E38\u4EAE\u7684\u56FE\u50CF\uFF0C\u5982\u679C\u542F\u7528\u63A8\u8350\u4E3A 0.1\\"),\\n        multires_noise_iterations: Schema.number().step(1).description(\\"\u591A\u5206\u8FA8\u7387\uFF08\u91D1\u5B57\u5854\uFF09\u566A\u58F0\u8FED\u4EE3\u6B21\u6570 \u63A8\u8350 6-10\u3002\u65E0\u6CD5\u4E0E noise_offset \u4E00\u540C\u542F\u7528\\"),\\n        multires_noise_discount: Schema.number().step(0.1).description(\\"\u591A\u5206\u8FA8\u7387\uFF08\u91D1\u5B57\u5854\uFF09\u8870\u51CF\u7387 \u63A8\u8350 0.3-0.8\uFF0C\u987B\u540C\u65F6\u4E0E\u4E0A\u65B9\u53C2\u6570 multires_noise_iterations \u4E00\u540C\u542F\u7528\\"),\\n    }).description(\\"\u566A\u58F0\u8BBE\u7F6E\\"),\\n\\n    Schema.object({\\n        seed: Schema.number().default(1337).description(\\"\u968F\u673A\u79CD\u5B50\\"),\\n        clip_skip: Schema.number().role(\\"slider\\").min(0).max(12).step(1).default(2).description(\\"CLIP \u8DF3\u8FC7\u5C42\u6570 *\u7384\u5B66*\\"),\\n    }).description(\\"\u9AD8\u7EA7\u8BBE\u7F6E\\"),\\n\\n    Schema.object({\\n        mixed_precision: Schema.union([\\"no\\", \\"fp16\\", \\"bf16\\"]).default(\\"fp16\\").description(\\"\u8BAD\u7EC3\u6DF7\u5408\u7CBE\u5EA6\\"),\\n        full_fp16: Schema.boolean().default(false).description(\\"\u5B8C\u5168\u4F7F\u7528 FP16 \u7CBE\u5EA6\\"),\\n        full_bf16: Schema.boolean().default(false).description(\\"\u5B8C\u5168\u4F7F\u7528 BF16 \u7CBE\u5EA6\\"),\\n        xformers: Schema.boolean().default(true).description(\\"\u542F\u7528 xformers\\"),\\n        lowram: Schema.boolean().default(false).description(\\"\u4F4E\u5185\u5B58\u6A21\u5F0F \u8BE5\u6A21\u5F0F\u4E0B\u4F1A\u5C06 U-net\u3001\u6587\u672C\u7F16\u7801\u5668\u3001VAE \u76F4\u63A5\u52A0\u8F7D\u5230\u663E\u5B58\u4E2D\\"),\\n        cache_latents: Schema.boolean().default(true).description(\\"\u7F13\u5B58\u56FE\u50CF latent\\"),\\n        cache_latents_to_disk: Schema.boolean().default(true).description(\\"\u7F13\u5B58\u56FE\u50CF latent \u5230\u78C1\u76D8\\"),\\n        cache_text_encoder_outputs: Schema.boolean().default(false).description(\\"\u7F13\u5B58\u6587\u672C\u7F16\u7801\u5668\u7684\u8F93\u51FA\uFF0C\u51CF\u5C11\u663E\u5B58\u4F7F\u7528\u3002\u4F7F\u7528\u65F6\u9700\u8981\u5173\u95ED shuffle_caption\\"),\\n        cache_text_encoder_outputs_to_disk: Schema.boolean().default(false).description(\\"\u7F13\u5B58\u6587\u672C\u7F16\u7801\u5668\u7684\u8F93\u51FA\u5230\u78C1\u76D8\\"),\\n        persistent_data_loader_workers: Schema.boolean().default(true).description(\\"\u4FDD\u7559\u52A0\u8F7D\u8BAD\u7EC3\u96C6\u7684worker\uFF0C\u51CF\u5C11\u6BCF\u4E2A epoch \u4E4B\u95F4\u7684\u505C\u987F\u3002\\"),\\n        multi_gpu: Schema.boolean().description(\\"\u591A GPU \u8BAD\u7EC3\\"),\\n    }).description(\\"\u901F\u5EA6\u4F18\u5316\u9009\u9879\\"),\\n]);\\n"},"excerpt":"","headers":[],"filePathRelative":"lora/master.md"}`);export{e as data};
