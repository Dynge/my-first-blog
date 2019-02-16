from django.shortcuts import render
from django.http import HttpResponse
from .models import Post
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


def about(request):
    return render(request, "blog/about.html", {"title": "About"})


def some_view(request):
    # Create the HttpResponse object with the appropriate CSV header.
    response = HttpResponse(content_type="text/csv")
    response["Content-Disposition"] = 'attachment; filename="somefilename.csv"'
    writer = csv.writer(response)
    for object in Post.objects.all():
        writer.writerow(
            [object.title, object.author, object.content, object.date_posted, object.pk]
        )

    return response
