<?php

namespace App\Http\Controllers\Api;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    public function index(){
        $post = Post::latest()->paginate(5);

        return new PostResource(true, 'List data post', $post);
    }


    public function store(Request $request)
    {
        // validator rules
        $validator = Validator::make($request->all(), [
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'title' => 'required',
            'content' => 'required'
        ]);

        // if validation fails
        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }

        // upload image
        $image = $request->file('image');
        $image->storeAs('public/posts', $image->hashName());

        // create post
        $post = Post::create([
            'image' => $image->hashName(),
            'title' => $request->title,
            'content' => $request->content
        ]);

        return new PostResource(true, 'Data Berhasil ditambahkan', $post);
    }

    public function show(Post $post)
    {
        return new PostResource(true, 'data ditemukan', $post);
    }
    

    public function update(Request $request, Post $post)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'content' => 'required'
        ]);

        // jika validasi gagal
        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }

        // chech image empty or not
        if($request->hasFile('image')){
            $image = $request->file('image');
            $image->storeAs('public/posts', $image->hashName());

            // delete old storage
            Storage::delete('public/posts/'.$post->image);

            $post->update([
                'image' => $image->hashName(),
                'title' => $request->title,
                'content' => $request->content
            ]);
        }else{
            $post->update([
                'title' => $request->title,
                'content' => $request->content
            ]);
        }

        return new PostResource(true, 'Data berhasil diubah', $post);
    }


    public function destroy(Post $post){
        Storage::delete('public/posts/'.$post->image);

        $post->delete();

        return new PostResource(true, 'Post Berhasil dihapus', null);
    }
}
