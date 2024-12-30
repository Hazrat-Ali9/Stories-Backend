import { v2 as cloudinary } from 'cloudinary';
import { Request, Response, Router } from 'express';
import multer from 'multer';

const router = Router()
const storage = multer.memoryStorage();
const upload = multer({ storage });

cloudinary.config({
    cloud_name: "djck34rtp",
    api_key: "215571838744392",
    api_secret: "bxkJlnOpVx1it5S1HO4LG-IbZtI",
});


router.post('/', upload.single('image'), async (req: Request, res: Response) => {
    try {
        const uploadStream = cloudinary.uploader.upload_stream({
            folder: 'Blog Site',
          }, (error, result: any) => {
            if (error) {
              res.status(500).json({
                success: false,
                message: 'Error uploading image',
                error: error,
              });
            } else {
              res.json({
                success: true,
                message: 'Image uploaded successfully!',
                url: result.secure_url,
              });
            }
          });
          
          uploadStream.end(req.file?.buffer);
    } catch (error: any) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }   
});

router.get('/all', async (req: Request, res: Response) => {
    try {
        const result = await cloudinary.api.resources({
          type: 'upload',
          resource_type: 'image',
        });
        res.send(result);
    } catch (error: any) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
})

router.put('/delete', async (req: Request, res: Response) => {
    try {

        const result = await cloudinary.uploader.destroy(req.body.public_id);
        res.send(result);
    } catch (error: any) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
})

export default router