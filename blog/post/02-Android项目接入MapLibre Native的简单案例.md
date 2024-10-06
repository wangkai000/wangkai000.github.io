---
title: Android项目接入MapLibre Native的简单案例
date: 2022/09/25
desc: Android项目接入MapLibre Native的简单案例记录
tags: ['#全部','#Android']
cover: https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/imagesWaveDrag.gif
---

[[toc]]

[MapLibre Native](https://github.com/maplibre/maplibre-native) 是一个免费且开源的库，用于在各种平台上的应用程序和桌面应用程序中发布地图。由于 GPU 加速的矢量瓦片渲染，地图的快速显示成为可能。

[MapLibre Native 安卓集成文档](https://maplibre.org/maplibre-native/docs/book/android/index.html)。

### 1,module级gradle中配置对应插件

```sh
dependencies {

    implementation 'org.maplibre.gl:android-sdk:11.0.0'
}
```

### 2,settings.gradle中配置一下依赖资源的代理加速

没有网络问题太慢问题忽略此步骤

```sh
pluginManagement {
	repositories {
		maven {
			url 'https://maven.aliyun.com/repository/public/'
		}
		maven {
			url 'https://maven.aliyun.com/repository/google/'
		}
		maven {
			url 'https://maven.aliyun.com/repository/jcenter/'
		}
		maven {
			url 'https://maven.aliyun.com/repository/central/'
		}
		google()
		mavenCentral()
		gradlePluginPortal()
	}
}
dependencyResolutionManagement {
	repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
	repositories {
		maven {
			url 'https://maven.aliyun.com/repository/public/'
		}
		maven {
			url 'https://maven.aliyun.com/repository/google/'
		}
		maven {
			url 'https://maven.aliyun.com/repository/jcenter/'
		}
		maven {
			url 'https://maven.aliyun.com/repository/central/'
		}
		google()
		mavenCentral()
	}
}

```

### 3,在xml布局文件中添加对应组件

```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

        <org.maplibre.android.maps.MapView
            android:id="@+id/mapView"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            />

</androidx.constraintlayout.widget.ConstraintLayout>
```

### 4,添加地图对应加载逻辑

官方默认使用的kotlin,暂未找到java版本的，我们也用kotlin

```kotlin
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.LayoutInflater
import org.maplibre.android.MapLibre

import org.maplibre.android.maps.MapView

class MainActivity : AppCompatActivity() {

    // Declare a variable for MapView
    private lateinit var mapView: MapView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // 初始化
        MapLibre.getInstance(this)
        val inflater = LayoutInflater.from(this)
        val rootView = inflater.inflate(R.layout.activity_main, null)
        setContentView(rootView)

        // Init the MapView
        // 绑定节点
        mapView = rootView.findViewById(R.id.mapView)
        // 加载数据
        mapView.getMapAsync { map ->
            map.setStyle("https://demotiles.maplibre.org/style.json")
//            map.cameraPosition = CameraPosition.Builder().Buildertarget(LatLng(0.0,0.0)).zoom(1.0).build()
        }
    }

    override fun onStart() {
        super.onStart()
        mapView.onStart()
    }

    override fun onResume() {
        super.onResume()
        mapView.onResume()
    }

    override fun onPause() {
        super.onPause()
        mapView.onPause()
    }

    override fun onStop() {
        super.onStop()
        mapView.onStop()
    }

    override fun onLowMemory() {
        super.onLowMemory()
        mapView.onLowMemory()
    }

    override fun onDestroy() {
        super.onDestroy()
        mapView.onDestroy()
    }

    override fun onSaveInstanceState(outState: Bundle) {
        super.onSaveInstanceState(outState)
        mapView.onSaveInstanceState(outState)
    }
}

```

### 5,如遇打包报错的异常情况

如果出现报错类似的错误

```
Error:Kotlin: Module was compiled with an incompatible version of Kotlin. The binary version of its metadata is 1.7.0, expected version is 1.9.0.

```

注意切换当前项目项目级gradle里面的的kotlin到对应提示的版本就行。
id 'org.jetbrains.kotlin.android' version '1.9.0' apply false 的作用主要是声明和指定Kotlin Android Gradle插件的版本

```sh
plugins {

    id 'org.jetbrains.kotlin.android' version '1.9.0' apply false
}
```

有空继续更新...
