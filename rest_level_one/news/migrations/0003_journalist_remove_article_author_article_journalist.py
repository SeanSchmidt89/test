# Generated by Django 4.0.5 on 2022-06-28 06:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0002_rename_articale_article'),
    ]

    operations = [
        migrations.CreateModel(
            name='Journalist',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=60)),
                ('last_name', models.CharField(max_length=60)),
                ('biography', models.TextField(blank=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='article',
            name='author',
        ),
        migrations.AddField(
            model_name='article',
            name='journalist',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='articles', to='news.journalist'),
            preserve_default=False,
        ),
    ]
