from django.shortcuts import render
from django.http import HttpResponse
from .models import Post
from django.views.decorators.csrf import csrf_exempt
import csv

# Create your views here.
posts = [
    {
        "author": "Michael D. Lyngs",
        "title": "Blog Pose 1",
        "content": "First contact",
        "date_posted": "15. of February 2019",
    },
    {
        "author": "Cristina Deleuran",
        "title": "Blog Pose 2",
        "content": "First love",
        "date_posted": "15. of February 2019",
    },
]


def home(request):
    context = {"posts": Post.objects.all()}
    return render(request, "blog/home.html", context)

@csrf_exempt
def about(request):
    
    context = {
        "title": "About",
        "posts": Post.objects.all(),
        "first_post": Post.objects.filter(id=1),
    }
    
    if request.method == "POST":
        Post2Update = Post.objects.get(id=request.POST.get('id'))
        #if request.POST.get('id'):
        if Post2Update:
            #Post2Update.id = request.POST.get('id')
            Post2Update.content = "Wow we actually hit one by random"
            print(Post2Update)
            print(request.POST.get('id'))
            Post2Update.save()
        #Post2Update.id = request.POST.get("id","")
        #for post in Posts2Update:
        #    post.save()
        
    return render(request, "blog/about.html", context)


def save_view(request):
    # Create the HttpResponse object with the appropriate CSV header.
    response = HttpResponse(content_type="text/csv")
    response["Content-Disposition"] = 'attachment; filename="somefilename.csv"'
    writer = csv.writer(response)
    for object in Post.objects.all():
        writer.writerow(
            [object.title, object.author, object.content, object.date_posted, object.pk]
        )

    return response

